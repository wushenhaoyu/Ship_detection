import{d as x,aS as Re,H as D,ai as pe,m as B,r as s,o as r,h as y,w as t,b as e,e as E,a as n,n as R,u as f,x as j,q as U,aZ as Pe,p as O,g as H,c as F,E as Y,G as X,J as Be,t as L,Q as ye,S as fe,a5 as Z,A as T,a1 as Ce,v as ie,F as G,f as ee,y as K,a4 as De,ac as ne,az as oe,a_ as Ie,a$ as Ue,aw as Ge,aX as we,b0 as Ne,b1 as qe,b2 as Ke,s as Oe,C as He,R as Se,aK as xe,ah as We,b3 as je,D as ve}from"./index-jvtWBQTx.js";import{a as Qe,_ as ue}from"./index.vue_vue_type_script_setup_true_name_SwitchDark_lang-xIMS_Mky.js";import{_ as A}from"./_plugin-vue_export-helper-x3n3nnut.js";import{u as Ve,a as Me}from"./tabs-t9v0d24S.js";import{S as Xe,_ as Le}from"./sortable.esm-7KB62mPT.js";import{u as Je}from"./index-Gg_wllbp.js";function Ye(a){return{all:a=a||new Map,on:function(o,l){var c=a.get(o);c?c.push(l):a.set(o,[l])},off:function(o,l){var c=a.get(o);c&&(l?c.splice(c.indexOf(l)>>>0,1):a.set(o,[]))},emit:function(o,l){var c=a.get(o);c&&c.slice().map(function(_){_(l)}),(c=a.get("*"))&&c.slice().map(function(_){_(o,l)})}}}const Fe=Ye(),z=a=>(O("data-v-4549fccb"),a=a(),H(),a),Ze={class:"layout-box"},et=z(()=>n("div",{class:"layout-dark"},null,-1)),tt=z(()=>n("div",{class:"layout-container"},[n("div",{class:"layout-light"}),n("div",{class:"layout-content"})],-1)),nt=z(()=>n("div",{class:"layout-dark"},null,-1)),ot=z(()=>n("div",{class:"layout-container"},[n("div",{class:"layout-light"}),n("div",{class:"layout-content"})],-1)),lt=z(()=>n("div",{class:"layout-dark"},null,-1)),at=z(()=>n("div",{class:"layout-content"},null,-1)),st=z(()=>n("div",{class:"layout-dark"},null,-1)),ct=z(()=>n("div",{class:"layout-light"},null,-1)),it=z(()=>n("div",{class:"layout-content"},null,-1)),ut={class:"theme-item"},rt={class:"theme-item mb50"},dt={class:"theme-item"},_t=z(()=>n("span",null,"主题颜色",-1)),mt={class:"theme-item"},pt=z(()=>n("span",null,"暗黑模式",-1)),ft={class:"theme-item"},vt=z(()=>n("span",null,"灰色模式",-1)),ht={class:"theme-item mb40"},bt=z(()=>n("span",null,"色弱模式",-1)),gt={class:"theme-item"},wt=z(()=>n("span",null,"菜单折叠",-1)),kt={class:"theme-item"},$t=z(()=>n("span",null,"菜单手风琴",-1)),yt={class:"theme-item"},Ct=z(()=>n("span",null,"面包屑",-1)),St={class:"theme-item"},xt=z(()=>n("span",null,"面包屑图标",-1)),Vt={class:"theme-item"},Mt=z(()=>n("span",null,"标签栏",-1)),Lt={class:"theme-item"},Ft=z(()=>n("span",null,"标签栏图标",-1)),Tt={class:"theme-item"},Et=z(()=>n("span",null,"页脚",-1)),zt=x({__name:"index",setup(a){const{changePrimary:o,changeGreyOrWeak:l,setAsideTheme:c,setHeaderTheme:_}=Re(),i=D(),{layout:d,primary:p,isGrey:m,isWeak:k,asideInverted:$,headerInverted:g,isCollapse:v,accordion:u,breadcrumb:h,breadcrumbIcon:b,tabs:S,tabsIcon:V,footer:M}=pe(i),J=[Pe,"#daa96e","#0c819f","#409eff","#27ae60","#ff5c93","#e74c3c","#fd726d","#f39c12","#9b59b6"],N=le=>{i.setGlobalState("layout",le),c()},P=B(!1);return Fe.on("openThemeDrawer",()=>P.value=!0),(le,w)=>{const se=s("Notification"),W=s("el-icon"),me=s("el-divider"),ce=s("CircleCheckFilled"),te=s("el-tooltip"),ge=s("QuestionFilled"),q=s("el-switch"),Te=s("ColdDrink"),Ee=s("el-color-picker"),ze=s("Setting"),Ae=s("el-drawer");return r(),y(Ae,{modelValue:P.value,"onUpdate:modelValue":w[18]||(w[18]=C=>P.value=C),title:"布局设置",size:"290px"},{default:t(()=>[e(me,{class:"divider","content-position":"center"},{default:t(()=>[e(W,null,{default:t(()=>[e(se)]),_:1}),E(" 布局样式 ")]),_:1}),n("div",Ze,[e(te,{effect:"dark",content:"纵向",placement:"top","show-after":200},{default:t(()=>[n("div",{class:R(["layout-item layout-vertical",{"is-active":f(d)=="vertical"}]),onClick:w[0]||(w[0]=C=>N("vertical"))},[et,tt,f(d)=="vertical"?(r(),y(W,{key:0},{default:t(()=>[e(ce)]),_:1})):j("",!0)],2)]),_:1}),e(te,{effect:"dark",content:"经典",placement:"top","show-after":200},{default:t(()=>[n("div",{class:R(["layout-item layout-classic",{"is-active":f(d)=="classic"}]),onClick:w[1]||(w[1]=C=>N("classic"))},[nt,ot,f(d)=="classic"?(r(),y(W,{key:0},{default:t(()=>[e(ce)]),_:1})):j("",!0)],2)]),_:1}),e(te,{effect:"dark",content:"横向",placement:"top","show-after":200},{default:t(()=>[n("div",{class:R(["layout-item layout-transverse",{"is-active":f(d)=="transverse"}]),onClick:w[2]||(w[2]=C=>N("transverse"))},[lt,at,f(d)=="transverse"?(r(),y(W,{key:0},{default:t(()=>[e(ce)]),_:1})):j("",!0)],2)]),_:1}),e(te,{effect:"dark",content:"分栏",placement:"top","show-after":200},{default:t(()=>[n("div",{class:R(["layout-item layout-columns",{"is-active":f(d)=="columns"}]),onClick:w[3]||(w[3]=C=>N("columns"))},[st,ct,it,f(d)=="columns"?(r(),y(W,{key:0},{default:t(()=>[e(ce)]),_:1})):j("",!0)],2)]),_:1})]),n("div",ut,[n("span",null,[E(" 侧边栏反转色 "),e(te,{effect:"dark",content:"侧边栏颜色变为深色模式",placement:"top"},{default:t(()=>[e(W,null,{default:t(()=>[e(ge)]),_:1})]),_:1})]),e(q,{modelValue:f($),"onUpdate:modelValue":w[4]||(w[4]=C=>U($)?$.value=C:null),onChange:f(c)},null,8,["modelValue","onChange"])]),n("div",rt,[n("span",null,[E(" 头部反转色 "),e(te,{effect:"dark",content:"头部颜色变为深色模式",placement:"top"},{default:t(()=>[e(W,null,{default:t(()=>[e(ge)]),_:1})]),_:1})]),e(q,{modelValue:f(g),"onUpdate:modelValue":w[5]||(w[5]=C=>U(g)?g.value=C:null),onChange:f(_)},null,8,["modelValue","onChange"])]),e(me,{class:"divider","content-position":"center"},{default:t(()=>[e(W,null,{default:t(()=>[e(Te)]),_:1}),E(" 全局主题 ")]),_:1}),n("div",dt,[_t,e(Ee,{modelValue:f(p),"onUpdate:modelValue":w[6]||(w[6]=C=>U(p)?p.value=C:null),predefine:J,onChange:f(o)},null,8,["modelValue","onChange"])]),n("div",mt,[pt,e(Qe)]),n("div",ft,[vt,e(q,{modelValue:f(m),"onUpdate:modelValue":w[7]||(w[7]=C=>U(m)?m.value=C:null),onChange:w[8]||(w[8]=C=>f(l)("grey",!!C))},null,8,["modelValue"])]),n("div",ht,[bt,e(q,{modelValue:f(k),"onUpdate:modelValue":w[9]||(w[9]=C=>U(k)?k.value=C:null),onChange:w[10]||(w[10]=C=>f(l)("weak",!!C))},null,8,["modelValue"])]),e(me,{class:"divider","content-position":"center"},{default:t(()=>[e(W,null,{default:t(()=>[e(ze)]),_:1}),E(" 界面设置 ")]),_:1}),n("div",gt,[wt,e(q,{modelValue:f(v),"onUpdate:modelValue":w[11]||(w[11]=C=>U(v)?v.value=C:null)},null,8,["modelValue"])]),n("div",kt,[$t,e(q,{modelValue:f(u),"onUpdate:modelValue":w[12]||(w[12]=C=>U(u)?u.value=C:null)},null,8,["modelValue"])]),n("div",yt,[Ct,e(q,{modelValue:f(h),"onUpdate:modelValue":w[13]||(w[13]=C=>U(h)?h.value=C:null)},null,8,["modelValue"])]),n("div",St,[xt,e(q,{modelValue:f(b),"onUpdate:modelValue":w[14]||(w[14]=C=>U(b)?b.value=C:null)},null,8,["modelValue"])]),n("div",Vt,[Mt,e(q,{modelValue:f(S),"onUpdate:modelValue":w[15]||(w[15]=C=>U(S)?S.value=C:null)},null,8,["modelValue"])]),n("div",Lt,[Ft,e(q,{modelValue:f(V),"onUpdate:modelValue":w[16]||(w[16]=C=>U(V)?V.value=C:null)},null,8,["modelValue"])]),n("div",Tt,[Et,e(q,{modelValue:f(M),"onUpdate:modelValue":w[17]||(w[17]=C=>U(M)?M.value=C:null)},null,8,["modelValue"])])]),_:1},8,["modelValue"])}}}),At=A(zt,[["__scopeId","data-v-4549fccb"]]),Rt=a=>(O("data-v-fbc0d1c1"),a=a(),H(),a),Pt=Rt(()=>n("i",{class:R("iconfont icon-tuichu")},null,-1)),Bt=[Pt],Dt=x({__name:"Maximize",setup(a){const o=D(),l=()=>{o.setGlobalState("maximize",!1)};return(c,_)=>(r(),F("div",{class:"maximize",onClick:l},Bt))}}),It=A(Dt,[["__scopeId","data-v-fbc0d1c1"]]),Ut=a=>(O("data-v-a3822701"),a=a(),H(),a),Gt=Ut(()=>n("div",{class:"more-button"},[n("i",{class:R("iconfont icon-xiala")})],-1)),Nt=x({__name:"MoreButton",setup(a){const o=Y(),l=X(),c=Ve(),_=D(),i=Me(),d=Be("refresh"),p=()=>{setTimeout(()=>{o.meta.isKeepAlive&&i.removeKeepAliveName(o.fullPath),d(!1),ye(()=>{o.meta.isKeepAlive&&i.addKeepAliveName(o.fullPath),d(!0)})},0)},m=()=>{_.setGlobalState("maximize",!0)},k=()=>{o.meta.isAffix||c.removeTabs(o.fullPath)},$=()=>{c.closeMultipleTab(),l.push(fe)};return(g,v)=>{const u=s("Refresh"),h=s("el-icon"),b=s("el-dropdown-item"),S=s("FullScreen"),V=s("Remove"),M=s("DArrowLeft"),J=s("DArrowRight"),N=s("CircleClose"),P=s("FolderDelete"),le=s("el-dropdown-menu"),w=s("el-dropdown");return r(),y(w,{trigger:"click",teleported:!1},{dropdown:t(()=>[e(le,null,{default:t(()=>[e(b,{onClick:p},{default:t(()=>[e(h,null,{default:t(()=>[e(u)]),_:1}),E(L(g.$t("tabs.refresh")),1)]),_:1}),e(b,{onClick:m},{default:t(()=>[e(h,null,{default:t(()=>[e(S)]),_:1}),E(L(g.$t("tabs.maximize")),1)]),_:1}),e(b,{divided:"",onClick:k},{default:t(()=>[e(h,null,{default:t(()=>[e(V)]),_:1}),E(L(g.$t("tabs.closeCurrent")),1)]),_:1}),e(b,{onClick:v[0]||(v[0]=se=>f(c).closeTabsOnSide(f(o).fullPath,"left"))},{default:t(()=>[e(h,null,{default:t(()=>[e(M)]),_:1}),E(L(g.$t("tabs.closeLeft")),1)]),_:1}),e(b,{onClick:v[1]||(v[1]=se=>f(c).closeTabsOnSide(f(o).fullPath,"right"))},{default:t(()=>[e(h,null,{default:t(()=>[e(J)]),_:1}),E(L(g.$t("tabs.closeRight")),1)]),_:1}),e(b,{divided:"",onClick:v[2]||(v[2]=se=>f(c).closeMultipleTab(f(o).fullPath))},{default:t(()=>[e(h,null,{default:t(()=>[e(N)]),_:1}),E(L(g.$t("tabs.closeOther")),1)]),_:1}),e(b,{onClick:$},{default:t(()=>[e(h,null,{default:t(()=>[e(P)]),_:1}),E(L(g.$t("tabs.closeAll")),1)]),_:1})]),_:1})]),default:t(()=>[Gt]),_:1})}}}),qt=A(Nt,[["__scopeId","data-v-a3822701"]]),Kt={class:"tabs-box"},Ot={class:"tabs-menu"},Ht=x({__name:"index",setup(a){const o=Y(),l=X(),c=Ve(),_=Z(),i=D(),d=B(o.fullPath),p=T(()=>c.tabsMenuList),m=T(()=>i.tabsIcon);Ce(()=>{$(),k()}),ie(()=>o.fullPath,()=>{if(o.meta.isFull)return;d.value=o.fullPath;const u={icon:o.meta.icon,title:o.meta.title,path:o.fullPath,name:o.name,close:!o.meta.isAffix,isKeepAlive:o.meta.isKeepAlive};c.addTabs(u)},{immediate:!0});const k=()=>{_.flatMenuListGet.forEach(u=>{if(u.meta.isAffix&&!u.meta.isHide&&!u.meta.isFull){const h={icon:u.meta.icon,title:u.meta.title,path:u.path,name:u.name,close:!u.meta.isAffix,isKeepAlive:u.meta.isKeepAlive};c.addTabs(h)}})},$=()=>{Xe.create(document.querySelector(".el-tabs__nav"),{draggable:".el-tabs__item",animation:300,onEnd({newIndex:u,oldIndex:h}){const b=[...c.tabsMenuList],S=b.splice(h,1)[0];b.splice(u,0,S),c.setTabs(b)}})},g=u=>{const h=u.props.name;l.push(h)},v=u=>{c.removeTabs(u,u==o.fullPath)};return(u,h)=>{const b=s("el-icon"),S=s("el-tab-pane"),V=s("el-tabs");return r(),F("div",Kt,[n("div",Ot,[e(V,{modelValue:d.value,"onUpdate:modelValue":h[0]||(h[0]=M=>d.value=M),type:"card",onTabClick:g,onTabRemove:v},{default:t(()=>[(r(!0),F(G,null,ee(p.value,M=>(r(),y(S,{key:M.path,label:M.title,name:M.path,closable:M.close},{label:t(()=>[M.icon&&m.value?(r(),y(b,{key:0,class:"tabs-icon"},{default:t(()=>[(r(),y(K(M.icon)))]),_:2},1024)):j("",!0),E(" "+L(M.title),1)]),_:2},1032,["label","name","closable"]))),128))]),_:1},8,["modelValue"]),e(qt)])])}}}),Wt=A(Ht,[["__scopeId","data-v-d2996584"]]),jt={},Qt=a=>(O("data-v-116ce38a"),a=a(),H(),a),Xt={class:"footer flx-center"},Jt=Qt(()=>n("a",{href:"https://beian.miit.gov.cn/",target:"_blank"},"陕ICP备2024028833号-1",-1)),Yt=[Jt];function Zt(a,o){return r(),F("div",Xt,Yt)}const en=A(jt,[["render",Zt],["__scopeId","data-v-116ce38a"]]),tn=x({__name:"index",setup(a){const o=D(),{maximize:l,isCollapse:c,layout:_,tabs:i,footer:d}=pe(o),p=Me(),{keepAliveName:m}=pe(p),k=B(!0);Ge("refresh",b=>k.value=b);const g=new Map;function v(b,S){if(!b)return;const V=S.fullPath;let M=g.get(V);return M||(M={name:V,render:()=>we(b)},g.set(V,M)),we(M)}ie(()=>l.value,()=>{const b=document.getElementById("app");l.value?b.classList.add("main-maximize"):b.classList.remove("main-maximize")},{immediate:!0}),ie(()=>_.value,()=>{document.body.setAttribute("class",_.value)},{immediate:!0});const u=B(0),h=Je(()=>{u.value=document.body.clientWidth,!c.value&&u.value<1200&&o.setGlobalState("isCollapse",!0),c.value&&u.value>1200&&o.setGlobalState("isCollapse",!1)},100);return window.addEventListener("resize",h,!1),De(()=>{window.removeEventListener("resize",h)}),(b,S)=>{const V=s("router-view"),M=s("el-main"),J=s("el-footer");return r(),F(G,null,[ne(e(It,null,null,512),[[oe,f(l)]]),ne(e(Wt,null,null,512),[[oe,f(i)]]),e(M,null,{default:t(()=>[e(V,null,{default:t(({Component:N,route:P})=>[e(Ie,{appear:"",name:"fade-transform",mode:"out-in"},{default:t(()=>[(r(),y(Ue,{include:f(m)},[k.value?(r(),y(K(v(N,P)),{key:P.fullPath})):j("",!0)],1032,["include"]))]),_:2},1024)]),_:1})]),_:1}),ne(e(J,null,{default:t(()=>[e(en)]),_:1},512),[[oe,f(d)]])],64)}}}),re=A(tn,[["__scopeId","data-v-91a2f566"]]),nn=x({__name:"CollapseIcon",setup(a){const o=D(),l=()=>o.setGlobalState("isCollapse",!o.isCollapse);return(c,_)=>{const i=s("el-icon");return r(),y(i,{class:"collapse-icon",onClick:l},{default:t(()=>[(r(),y(K(f(o).isCollapse?"expand":"fold")))]),_:1})}}}),on=A(nn,[["__scopeId","data-v-79434c0f"]]),ln=["onClick"],an={class:"breadcrumb-title"},sn=x({__name:"Breadcrumb",setup(a){const o=Y(),l=X(),c=Z(),_=D(),i=T(()=>{let p=c.breadcrumbListGet[o.matched[o.matched.length-1].path]??[];return p[0].path!==fe&&(p=[{path:fe,meta:{icon:"HomeFilled",title:"首页"}},...p]),p}),d=(p,m)=>{m!==i.value.length-1&&l.push(p.path)};return(p,m)=>{const k=s("el-icon"),$=s("el-breadcrumb-item"),g=s("el-breadcrumb");return r(),F("div",{class:R(["breadcrumb-box mask-image",!f(_).breadcrumbIcon&&"no-icon"])},[e(g,{"separator-icon":f(qe)},{default:t(()=>[e(Ne,{name:"breadcrumb"},{default:t(()=>[(r(!0),F(G,null,ee(i.value,(v,u)=>(r(),y($,{key:v.path},{default:t(()=>[n("div",{class:R(["el-breadcrumb__inner is-link",{"item-no-icon":!v.meta.icon}]),onClick:h=>d(v,u)},[v.meta.icon&&f(_).breadcrumbIcon?(r(),y(k,{key:0,class:"breadcrumb-icon"},{default:t(()=>[(r(),y(K(v.meta.icon)))]),_:2},1024)):j("",!0),n("span",an,L(v.meta.title),1)],10,ln)]),_:2},1024))),128))]),_:1})]),_:1},8,["separator-icon"])],2)}}}),cn=A(sn,[["__scopeId","data-v-fbbb1a4d"]]),un={class:"tool-bar-lf"},rn=x({__name:"ToolBarLeft",setup(a){const o=D();return(l,c)=>(r(),F("div",un,[e(on,{id:"collapseIcon"}),ne(e(cn,{id:"breadcrumb"},null,512),[[oe,f(o).breadcrumb]])]))}}),he=A(rn,[["__scopeId","data-v-143c0251"]]),dn=x({__name:"AssemblySize",setup(a){const o=D(),l=T(()=>o.assemblySize),c=[{label:"默认",value:"default"},{label:"大型",value:"large"},{label:"小型",value:"small"}],_=i=>{l.value!==i&&o.setGlobalState("assemblySize",i)};return(i,d)=>{const p=s("el-dropdown-item"),m=s("el-dropdown-menu"),k=s("el-dropdown");return r(),y(k,{trigger:"click",onCommand:_},{dropdown:t(()=>[e(m,null,{default:t(()=>[(r(),F(G,null,ee(c,$=>e(p,{key:$.value,command:$.value,disabled:l.value===$.value},{default:t(()=>[E(L($.label),1)]),_:2},1032,["command","disabled"])),64))]),_:1})]),default:t(()=>[n("i",{class:R(["iconfont icon-contentright","toolBar-icon"])})]),_:1})}}}),_n=x({__name:"Language",setup(a){const o=Ke.useI18n(),l=D(),c=T(()=>l.language),_=[{label:"简体中文",value:"zh"},{label:"English",value:"en"}],i=d=>{o.locale.value=d,l.setGlobalState("language",d)};return(d,p)=>{const m=s("el-dropdown-item"),k=s("el-dropdown-menu"),$=s("el-dropdown");return r(),y($,{trigger:"click",onCommand:i},{dropdown:t(()=>[e(k,null,{default:t(()=>[(r(),F(G,null,ee(_,g=>e(m,{key:g.value,command:g.value,disabled:c.value===g.value},{default:t(()=>[E(L(g.label),1)]),_:2},1032,["command","disabled"])),64))]),_:1})]),default:t(()=>[n("i",{class:R(["iconfont icon-zhongyingwen","toolBar-icon"])})]),_:1})}}}),mn={class:"menu-search-dialog"},pn=x({__name:"SearchMenu",setup(a){const o=X(),l=Z(),c=T(()=>l.flatMenuListGet.filter(v=>!v.meta.isHide)),_=(v,u)=>{const h=v?c.value.filter($(v)):c.value;u(h)},i=B(!1),d=B(),p=B(""),m=()=>{i.value=!0,ye(()=>{setTimeout(()=>{d.value.focus()})})},k=()=>{i.value=!1},$=v=>u=>u.path.toLowerCase().indexOf(v.toLowerCase())>-1||u.meta.title.toLowerCase().indexOf(v.toLowerCase())>-1,g=v=>{p.value="",v.meta.isLink?window.open(v.meta.isLink,"_blank"):o.push(v.path),k()};return(v,u)=>{const h=s("el-icon"),b=s("el-autocomplete"),S=s("el-dialog");return r(),F("div",mn,[n("i",{class:R(["iconfont icon-sousuo","toolBar-icon"]),onClick:m}),e(S,{modelValue:i.value,"onUpdate:modelValue":u[2]||(u[2]=V=>i.value=V),"destroy-on-close":"",modal:!1,"show-close":!1,fullscreen:"",onClick:k},{default:t(()=>[e(b,{ref_key:"menuInputRef",ref:d,modelValue:p.value,"onUpdate:modelValue":u[0]||(u[0]=V=>p.value=V),"value-key":"path",placeholder:"菜单搜索 ：支持菜单名称、路径","fetch-suggestions":_,onSelect:g,onClick:u[1]||(u[1]=Oe(()=>{},["stop"]))},{prefix:t(()=>[e(h,null,{default:t(()=>[e(f(He))]),_:1})]),default:t(({item:V})=>[e(h,null,{default:t(()=>[(r(),y(K(V.meta.icon)))]),_:2},1024),n("span",null,L(V.meta.title),1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}}),fn=A(pn,[["__scopeId","data-v-147e632e"]]),vn={class:"theme-setting"},hn=x({__name:"ThemeSetting",setup(a){const o=()=>{Fe.emit("openThemeDrawer")};return(l,c)=>(r(),F("div",vn,[n("i",{class:R(["iconfont icon-zhuti","toolBar-icon"]),onClick:o})]))}}),bn="/assets/png/msg01-lRu3M0zT.png",be=a=>(O("data-v-ae142802"),a=a(),H(),a),gn={class:"message"},wn=be(()=>n("div",{class:"message-list"},[n("div",{class:"message-item"},[n("img",{src:bn,alt:"",class:"message-icon"}),n("div",{class:"message-content"},[n("span",{class:"message-title"},"欢迎使用眼震诊疗平台🧡"),n("span",{class:"message-date"},"慧眼识珠")])])],-1)),kn=be(()=>n("div",{class:"message-empty"},[n("img",{src:Le,alt:"notData"}),n("div",null,"暂无消息")],-1)),$n=be(()=>n("div",{class:"message-empty"},[n("img",{src:Le,alt:"notData"}),n("div",null,"暂无代办")],-1)),yn=x({__name:"Message",setup(a){const o=B("first");return(l,c)=>{const _=s("el-badge"),i=s("el-tab-pane"),d=s("el-tabs"),p=s("el-popover");return r(),F("div",gn,[e(p,{placement:"bottom",width:310,trigger:"click"},{reference:t(()=>[e(_,{value:5,class:"item"},{default:t(()=>[n("i",{class:R(["iconfont icon-xiaoxi","toolBar-icon"])})]),_:1})]),default:t(()=>[e(d,{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=m=>o.value=m)},{default:t(()=>[e(i,{label:"通知(1)",name:"first"},{default:t(()=>[wn]),_:1}),e(i,{label:"消息(0)",name:"second"},{default:t(()=>[kn]),_:1}),e(i,{label:"代办(0)",name:"third"},{default:t(()=>[$n]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}}),Cn=A(yn,[["__scopeId","data-v-ae142802"]]),ke=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Q=(()=>{if(typeof document>"u")return!1;const a=ke[0],o={};for(const l of ke)if((l==null?void 0:l[1])in document){for(const[_,i]of l.entries())o[a[_]]=i;return o}return!1})(),$e={change:Q.fullscreenchange,error:Q.fullscreenerror};let I={request(a=document.documentElement,o){return new Promise((l,c)=>{const _=()=>{I.off("change",_),l()};I.on("change",_);const i=a[Q.requestFullscreen](o);i instanceof Promise&&i.then(_).catch(c)})},exit(){return new Promise((a,o)=>{if(!I.isFullscreen){a();return}const l=()=>{I.off("change",l),a()};I.on("change",l);const c=document[Q.exitFullscreen]();c instanceof Promise&&c.then(l).catch(o)})},toggle(a,o){return I.isFullscreen?I.exit():I.request(a,o)},onchange(a){I.on("change",a)},onerror(a){I.on("error",a)},on(a,o){const l=$e[a];l&&document.addEventListener(l,o,!1)},off(a,o){const l=$e[a];l&&document.removeEventListener(l,o,!1)},raw:Q};Object.defineProperties(I,{isFullscreen:{get:()=>!!document[Q.fullscreenElement]},element:{enumerable:!0,get:()=>document[Q.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[Q.fullscreenEnabled]}});Q||(I={isEnabled:!1});const ae=I,Sn={class:"fullscreen"},xn=x({__name:"Fullscreen",setup(a){const o=B(ae.isFullscreen);Ce(()=>{ae.on("change",()=>{ae.isFullscreen?o.value=!0:o.value=!1})});const l=()=>{ae.isEnabled||Se.warning("当前您的浏览器不支持全屏 ❌"),ae.toggle()};return(c,_)=>(r(),F("div",Sn,[n("i",{class:R([["iconfont",o.value?"icon-suoxiao":"icon-fangda"],"toolBar-icon"]),onClick:l},null,2)]))}}),Vn="/assets/gif/avatar-3G4evXKN.gif",Mn=n("span",null,"This is userInfo",-1),Ln={class:"dialog-footer"},Fn=x({__name:"InfoDialog",setup(a,{expose:o}){const l=B(!1);return o({openDialog:()=>{l.value=!0}}),(_,i)=>{const d=s("el-button"),p=s("el-dialog");return r(),y(p,{modelValue:l.value,"onUpdate:modelValue":i[2]||(i[2]=m=>l.value=m),title:"个人信息",width:"500px",draggable:""},{footer:t(()=>[n("span",Ln,[e(d,{onClick:i[0]||(i[0]=m=>l.value=!1)},{default:t(()=>[E("取消")]),_:1}),e(d,{type:"primary",onClick:i[1]||(i[1]=m=>l.value=!1)},{default:t(()=>[E("确认")]),_:1})])]),default:t(()=>[Mn]),_:1},8,["modelValue"])}}}),Tn=n("span",null,"This is Password",-1),En={class:"dialog-footer"},zn=x({__name:"PasswordDialog",setup(a,{expose:o}){const l=B(!1);return o({openDialog:()=>{l.value=!0}}),(_,i)=>{const d=s("el-button"),p=s("el-dialog");return r(),y(p,{modelValue:l.value,"onUpdate:modelValue":i[2]||(i[2]=m=>l.value=m),title:"修改密码",width:"500px",draggable:""},{footer:t(()=>[n("span",En,[e(d,{onClick:i[0]||(i[0]=m=>l.value=!1)},{default:t(()=>[E("取消")]),_:1}),e(d,{type:"primary",onClick:i[1]||(i[1]=m=>l.value=!1)},{default:t(()=>[E("确认")]),_:1})])]),default:t(()=>[Tn]),_:1},8,["modelValue"])}}}),An=a=>(O("data-v-4231a171"),a=a(),H(),a),Rn=An(()=>n("div",{class:"avatar"},[n("img",{src:Vn,alt:"avatar"})],-1)),Pn=x({__name:"Avatar",setup(a){const o=X(),l=xe(),c=()=>{We.confirm("您是否确认退出登录?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{l.setToken(""),o.replace(je),Se.success("退出登录成功！")})},_=B(null),i=B(null),d=p=>{};return(p,m)=>{const k=s("Edit"),$=s("el-icon"),g=s("el-dropdown-item"),v=s("SwitchButton"),u=s("el-dropdown-menu"),h=s("el-dropdown");return r(),F(G,null,[e(h,{trigger:"click"},{dropdown:t(()=>[e(u,null,{default:t(()=>[e(g,{onClick:m[0]||(m[0]=b=>d("passwordRef"))},{default:t(()=>[e($,null,{default:t(()=>[e(k)]),_:1}),E(L(p.$t("header.changePassword")),1)]),_:1}),e(g,{divided:"",onClick:c},{default:t(()=>[e($,null,{default:t(()=>[e(v)]),_:1}),E(L(p.$t("header.logout")),1)]),_:1})]),_:1})]),default:t(()=>[Rn]),_:1}),e(Fn,{ref_key:"infoRef",ref:_},null,512),e(zn,{ref_key:"passwordRef",ref:i},null,512)],64)}}}),Bn=A(Pn,[["__scopeId","data-v-4231a171"]]),Dn={class:"tool-bar-ri"},In={class:"header-icon"},Un={class:"username"},Gn=x({__name:"ToolBarRight",setup(a){const o=xe(),l=T(()=>o.userInfo.name);return(c,_)=>(r(),F("div",Dn,[n("div",In,[e(dn,{id:"assemblySize"}),e(_n,{id:"language"}),e(fn,{id:"searchMenu"}),e(hn,{id:"themeSetting"}),e(Cn,{id:"message"}),e(xn,{id:"fullscreen"})]),n("span",Un,L(l.value),1),e(Bn)]))}}),de=A(Gn,[["__scopeId","data-v-dc77bd85"]]),Nn={class:"sle"},qn={class:"sle"},_e=x({__name:"SubMenu",props:{menuList:{}},setup(a){const o=X(),l=c=>{if(c.meta.isLink)return window.open(c.meta.isLink,"_blank");o.push(c.path)};return(c,_)=>{const i=s("el-icon"),d=s("SubMenu",!0),p=s("el-sub-menu"),m=s("el-menu-item");return r(!0),F(G,null,ee(c.menuList,k=>{var $;return r(),F(G,{key:k.path},[($=k.children)!=null&&$.length?(r(),y(p,{key:0,index:k.path},{title:t(()=>[k.meta.icon?(r(),y(i,{key:0},{default:t(()=>[(r(),y(K(k.meta.icon)))]),_:2},1024)):j("",!0),n("span",Nn,L(k.meta.title),1)]),default:t(()=>[e(d,{"menu-list":k.children},null,8,["menu-list"])]),_:2},1032,["index"])):(r(),y(m,{key:1,index:k.path,onClick:g=>l(k)},{title:t(()=>[n("span",qn,L(k.meta.title),1)]),default:t(()=>[k.meta.icon?(r(),y(i,{key:0},{default:t(()=>[(r(),y(K(k.meta.icon)))]),_:2},1024)):j("",!0)]),_:2},1032,["index","onClick"]))],64)}),128)}}}),Kn=a=>(O("data-v-c3aab136"),a=a(),H(),a),On={class:"logo flx-center"},Hn=Kn(()=>n("img",{class:"logo-img",src:ue,alt:"logo"},null,-1)),Wn=x({name:"layoutVertical"}),jn=x({...Wn,setup(a){const o="眼震诊疗平台",l=Y(),c=Z(),_=D(),i=T(()=>_.accordion),d=T(()=>_.isCollapse),p=T(()=>c.showMenuListGet),m=T(()=>l.meta.activeMenu?l.meta.activeMenu:l.path);return(k,$)=>{const g=s("el-menu"),v=s("el-scrollbar"),u=s("el-aside"),h=s("el-header"),b=s("el-container");return r(),y(b,{class:"layout"},{default:t(()=>[e(u,null,{default:t(()=>[n("div",{class:"aside-box",style:ve({width:d.value?"65px":"210px"})},[n("div",On,[Hn,ne(n("span",{class:"logo-text"},L(f(o)),513),[[oe,!d.value]])]),e(v,null,{default:t(()=>[e(g,{router:!1,"default-active":m.value,collapse:d.value,"unique-opened":i.value,"collapse-transition":!1},{default:t(()=>[e(_e,{"menu-list":p.value},null,8,["menu-list"])]),_:1},8,["default-active","collapse","unique-opened"])]),_:1})],4)]),_:1}),e(b,null,{default:t(()=>[e(h,null,{default:t(()=>[e(he),e(de)]),_:1}),e(re)]),_:1})]),_:1})}}}),Qn=A(jn,[["__scopeId","data-v-c3aab136"]]),Xn=a=>(O("data-v-97078ebf"),a=a(),H(),a),Jn={class:"header-lf mask-image"},Yn={class:"logo flx-center"},Zn=Xn(()=>n("img",{class:"logo-img",src:ue,alt:"logo"},null,-1)),eo={class:"logo-text"},to={class:"header-ri"},no=x({name:"layoutClassic"}),oo=x({...no,setup(a){const o="眼震诊疗平台",l=Y(),c=Z(),_=D(),i=T(()=>_.accordion),d=T(()=>_.isCollapse),p=T(()=>c.showMenuListGet),m=T(()=>l.meta.activeMenu?l.meta.activeMenu:l.path);return(k,$)=>{const g=s("el-header"),v=s("el-menu"),u=s("el-scrollbar"),h=s("el-aside"),b=s("el-container");return r(),y(b,{class:"layout"},{default:t(()=>[e(g,null,{default:t(()=>[n("div",Jn,[n("div",Yn,[Zn,n("span",eo,L(f(o)),1)]),e(he)]),n("div",to,[e(de)])]),_:1}),e(b,{class:"classic-content"},{default:t(()=>[e(h,null,{default:t(()=>[n("div",{class:"aside-box",style:ve({width:d.value?"65px":"210px"})},[e(u,null,{default:t(()=>[e(v,{router:!1,"default-active":m.value,collapse:d.value,"unique-opened":i.value,"collapse-transition":!1},{default:t(()=>[e(_e,{"menu-list":p.value},null,8,["menu-list"])]),_:1},8,["default-active","collapse","unique-opened"])]),_:1})],4)]),_:1}),e(b,{class:"classic-main"},{default:t(()=>[e(re)]),_:1})]),_:1})]),_:1})}}}),lo=A(oo,[["__scopeId","data-v-97078ebf"]]),ao=a=>(O("data-v-abb64d5f"),a=a(),H(),a),so={class:"logo flx-center"},co=ao(()=>n("img",{class:"logo-img",src:ue,alt:"logo"},null,-1)),io={class:"logo-text"},uo=x({name:"layoutTransverse"}),ro=x({...uo,setup(a){const o="眼震诊疗平台",l=Y(),c=X(),_=Z(),i=T(()=>_.showMenuListGet),d=T(()=>l.meta.activeMenu?l.meta.activeMenu:l.path),p=m=>{if(m.meta.isLink)return window.open(m.meta.isLink,"_blank");c.push(m.path)};return(m,k)=>{const $=s("el-icon"),g=s("el-sub-menu"),v=s("el-menu-item"),u=s("el-menu"),h=s("el-header"),b=s("el-container");return r(),y(b,{class:"layout"},{default:t(()=>[e(h,null,{default:t(()=>[n("div",so,[co,n("span",io,L(f(o)),1)]),e(u,{mode:"horizontal",router:!1,"default-active":d.value},{default:t(()=>[(r(!0),F(G,null,ee(i.value,S=>{var V;return r(),F(G,{key:S.path},[(V=S.children)!=null&&V.length?(r(),y(g,{key:S.path,index:S.path+"el-sub-menu"},{title:t(()=>[e($,null,{default:t(()=>[(r(),y(K(S.meta.icon)))]),_:2},1024),n("span",null,L(S.meta.title),1)]),default:t(()=>[e(_e,{"menu-list":S.children},null,8,["menu-list"])]),_:2},1032,["index"])):(r(),y(v,{key:S.path+"el-menu-item",index:S.path,onClick:M=>p(S)},{title:t(()=>[n("span",null,L(S.meta.title),1)]),default:t(()=>[e($,null,{default:t(()=>[(r(),y(K(S.meta.icon)))]),_:2},1024)]),_:2},1032,["index","onClick"]))],64)}),128))]),_:1},8,["default-active"]),e(de)]),_:1}),e(re)]),_:1})}}}),_o=A(ro,[["__scopeId","data-v-abb64d5f"]]),mo=a=>(O("data-v-f95f731a"),a=a(),H(),a),po={class:"aside-split"},fo=mo(()=>n("div",{class:"logo flx-center"},[n("img",{class:"logo-img",src:ue,alt:"logo"})],-1)),vo={class:"split-list"},ho=["onClick"],bo={class:"title"},go={class:"logo flx-center"},wo=x({name:"layoutColumns"}),ko=x({...wo,setup(a){const o="眼震诊疗平台",l=Y(),c=X(),_=Z(),i=D(),d=T(()=>i.accordion),p=T(()=>i.isCollapse),m=T(()=>_.showMenuListGet),k=T(()=>l.meta.activeMenu?l.meta.activeMenu:l.path),$=B([]),g=B("");ie(()=>[m,l],()=>{var h;if(!m.value.length)return;g.value=l.path;const u=m.value.filter(b=>l.path===b.path||`/${l.path.split("/")[1]}`===b.path);if((h=u[0].children)!=null&&h.length)return $.value=u[0].children;$.value=[]},{deep:!0,immediate:!0});const v=u=>{var h;if(g.value=u.path,(h=u.children)!=null&&h.length)return $.value=u.children;$.value=[],c.push(u.path)};return(u,h)=>{const b=s("el-icon"),S=s("el-scrollbar"),V=s("el-menu"),M=s("el-aside"),J=s("el-header"),N=s("el-container");return r(),y(N,{class:"layout"},{default:t(()=>[n("div",po,[fo,e(S,null,{default:t(()=>[n("div",vo,[(r(!0),F(G,null,ee(m.value,P=>(r(),F("div",{key:P.path,class:R(["split-item",{"split-active":g.value===P.path||`/${g.value.split("/")[1]}`===P.path}]),onClick:le=>v(P)},[e(b,null,{default:t(()=>[(r(),y(K(P.meta.icon)))]),_:2},1024),n("span",bo,L(P.meta.title),1)],10,ho))),128))])]),_:1})]),e(M,{class:R({"not-aside":!$.value.length}),style:ve({width:p.value?"65px":"210px"})},{default:t(()=>[n("div",go,[ne(n("span",{class:"logo-text"},L(p.value?"G":f(o)),513),[[oe,$.value.length]])]),e(S,null,{default:t(()=>[e(V,{router:!1,"default-active":k.value,collapse:p.value,"unique-opened":d.value,"collapse-transition":!1},{default:t(()=>[e(_e,{"menu-list":$.value},null,8,["menu-list"])]),_:1},8,["default-active","collapse","unique-opened"])]),_:1})]),_:1},8,["class","style"]),e(N,null,{default:t(()=>[e(J,null,{default:t(()=>[e(he),e(de)]),_:1}),e(re)]),_:1})]),_:1})}}}),$o=A(ko,[["__scopeId","data-v-f95f731a"]]),yo=x({name:"layout"}),Co=x({...yo,setup(a){const o={vertical:Qn,classic:lo,transverse:_o,columns:$o},l=D(),c=T(()=>l.layout);return(_,i)=>(r(),F(G,null,[(r(),y(K(o[c.value]))),e(At)],64))}}),To=A(Co,[["__scopeId","data-v-eac80c2b"]]);export{To as default};
