# Generated by Django 4.2.11 on 2024-03-29 22:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0014_alter_doctor_token'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='is_cured',
            field=models.BooleanField(default=False),
        ),
    ]
