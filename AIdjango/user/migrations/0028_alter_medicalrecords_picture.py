# Generated by Django 4.2.11 on 2024-04-09 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0027_alter_historyrecords_medicalrecordtime_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicalrecords',
            name='Picture',
            field=models.ImageField(blank=True, null=True, upload_to='picture/images/'),
        ),
    ]
