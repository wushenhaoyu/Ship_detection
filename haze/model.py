import paddle
import paddle.nn as nn
import paddle.nn.functional as F
from paddle import to_tensor
import numpy as np
import math


class BasicConv(nn.Layer):
    def __init__(self, in_channels, out_channels, kernel_size=3, stride=1, dilation=1, bias=False):
        super(BasicConv, self).__init__()
        if dilation != 1:
            self.conv = nn.Conv2D(in_channels, out_channels, kernel_size, stride, dilation=dilation, padding=dilation, bias_attr=bias)
        else:
            self.conv = nn.Conv2D(in_channels, out_channels, kernel_size, stride, padding=kernel_size//2, dilation=dilation, bias_attr=bias)

        self.activation = nn.LeakyReLU()

    def forward(self, x):
        x = self.conv(x)
        x = self.activation(x)
        return x
    

class Resblock(nn.Layer):
    def __init__(self, channel):
        super(Resblock, self).__init__()
        self.conv = nn.Sequential(
                BasicConv(channel, channel, 3),
                BasicConv(channel, channel, 3)
                )
    
    def forward(self, x):
        return self.conv(x) + x
    
class SpatialPyramidPooling(nn.Layer):
    def __init__(self, channel, kernel_sizes, stride=1):
        super(SpatialPyramidPooling, self).__init__()

        self.conv = nn.LayerList([nn.Sequential(nn.Conv2D(channel, channel, kernel_size, stride, padding=kernel_size//2, bias_attr=True)) 
                                  for kernel_size in kernel_sizes])
    
    def forward(self, x):
        features = [convi(x) for convi in self.conv[::-1]]
        features = paddle.concat(features + [x], axis=1)
        return features
    
class GNet(nn.Layer):
    def __init__(self):
        super(GNet, self).__init__()
        self.a = T_Attention()
        self.t = TIDFE()
        self.f = FDFE()
        self.r = FI()

    def forward(self, x):
        A_map = self.a(x)
        x = paddle.add(x, A_map)  # 使用 paddle.add 代替 x + A_map
        out1 = self.t(x)
        out2 = self.f(x)
        out = self.r(x, out1, out2)
        return A_map, out1, out2, out




class T_Attention(nn.Layer):
    def __init__(self, channel_in=3, channel=32):
        super(T_Attention, self).__init__()
        
        self.conv_in = nn.Sequential(
            nn.MaxPool2D(kernel_size=3, stride=2, padding=1),
            BasicConv(channel_in, channel),
            SpatialPyramidPooling(channel, [5, 7, 9]),
            BasicConv(channel*4, channel, 1),
            BasicConv(channel, channel),
            nn.Conv2D(channel, channel_in, kernel_size=3, stride=1, padding=1),
            nn.Sigmoid()
        )
    
    def _upsample(self, x, y):
        _, _, H, W = y.shape
        return F.interpolate(x, size=(H, W), mode='bilinear')

    def forward(self, x_in):
        A_map = self._upsample(self.conv_in(x_in), x_in) * x_in
        return A_map
    

class TIDFE(nn.Layer):
    def __init__(self, channel_in=3, channel_out=3, channel_1=32, channel_2=64, channel_3=128):
        super(TIDFE, self).__init__()
        self.conv1_1 = nn.Sequential(
            BasicConv(channel_in, channel_1),
            BasicConv(channel_1, channel_1)
        )
        
        self.conv2_1 = nn.Sequential(
            nn.MaxPool2D(kernel_size=3, stride=2, padding=1),
            BasicConv(channel_1, channel_2),
            BasicConv(channel_2, channel_2),
            BasicConv(channel_2, channel_2),
            BasicConv(channel_2, channel_2)
        )
        
        self.conv3_1 = nn.Sequential(
            nn.MaxPool2D(kernel_size=3, stride=2, padding=1),
            BasicConv(channel_2, channel_3),
            BasicConv(channel_3, channel_3),
            BasicConv(channel_3, channel_3),
            BasicConv(channel_3, channel_3)
        )
        self.conv4_0 = BasicConv(channel_3, channel_2)
        self.conv4_1 = nn.Sequential(
            BasicConv(channel_2, channel_2),
            BasicConv(channel_2, channel_2),
            BasicConv(channel_2, channel_2)
        )
        
        self.conv5_0 = BasicConv(channel_2, channel_1)
        self.conv5_1 = nn.Sequential(
            BasicConv(channel_1, channel_1),
            BasicConv(channel_1, channel_1),
            BasicConv(channel_1, channel_1)
        )
        self.conv5_2 = nn.Conv2D(channel_1, channel_out, kernel_size=3, stride=1, padding=1)

    def _upsample(self, x, y):
        _, _, H, W = y.shape
        return F.interpolate(x, size=(H, W), mode='bilinear')
    
    def forward(self, x):
        # encoder
        x1_1 = self.conv1_1(x)
        x2_1 = self.conv2_1(x1_1)
        x3_1 = self.conv3_1(x2_1)
        
        # decoder
        x4_1 = self.conv4_0(self._upsample(x3_1, x2_1)) + x2_1
        x4_1 = self.conv4_1(x4_1)
        x5_1 = self.conv5_0(self._upsample(x4_1, x1_1)) + x1_1
        x5_1 = self.conv5_1(x5_1)
        out = self.conv5_2(x5_1)
        return out
    
class FDFE(nn.Layer):
    def __init__(self, channel=32, channel_in=3, channel_out=3):
        super(FDFE, self).__init__()
        self.conv1 = BasicConv(channel_in, channel)
        self.conv2 = BasicConv(channel, channel)
        self.conv3 = BasicConv(channel * 2, channel)
        self.conv4 = BasicConv(channel * 3, channel)
        self.conv5 = BasicConv(channel * 4, channel_out)

    def forward(self, x):
        x1_1 = self.conv1(x)
        x1_2 = self.conv2(x1_1)
        x1_3 = self.conv3(paddle.concat((x1_2, x1_1), axis=1))
        x1_4 = self.conv4(paddle.concat((x1_3, x1_2, x1_1), axis=1))
        x_out = self.conv5(paddle.concat((x1_4, x1_3, x1_2, x1_1), axis=1))

        return x_out


class FI(nn.Layer):
    def __init__(self, channel=32, channel_in=9, channel_out=3):
        super(FI, self).__init__()

        self.conv = nn.Sequential(
            BasicConv(channel_in, channel),
            Resblock(channel),
            Resblock(channel),
            Resblock(channel),
            Resblock(channel),
            Resblock(channel),
            nn.Conv2D(channel, channel_out, kernel_size=3, stride=1, padding=1, bias_attr=False)
        )

    def forward(self, x, y, z):
        out = paddle.concat((x, y, z), axis=1)
        out = self.conv(out)
        return out