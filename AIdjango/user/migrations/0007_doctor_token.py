# Generated by Django 4.2.11 on 2024-03-17 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_doctor_is_activate_alter_doctor_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='token',
            field=models.CharField(default='', max_length=50),
        ),
    ]
