# Generated by Django 4.2.11 on 2024-03-22 22:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0007_doctor_token'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hospital',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hospital_auth_id', models.CharField(max_length=10, unique=True)),
                ('province', models.CharField(max_length=50)),
                ('city', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
