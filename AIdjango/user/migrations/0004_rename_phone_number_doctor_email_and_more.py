# Generated by Django 4.2.11 on 2024-03-16 20:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_doctor_remove_patient_is_login_patient_address_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='doctor',
            old_name='phone_number',
            new_name='email',
        ),
        migrations.RemoveField(
            model_name='doctor',
            name='is_login',
        ),
        migrations.RemoveField(
            model_name='doctor',
            name='username',
        ),
    ]
