# Generated by Django 4.2.11 on 2024-04-08 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0025_remove_patient_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='historyrecords',
            name='PhotoLink',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='historyrecords',
            name='Video',
            field=models.FileField(blank=True, null=True, upload_to='videos/'),
        ),
        migrations.AddField(
            model_name='historyrecords',
            name='VideoLink',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='medicalrecords',
            name='PhotoLink',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='medicalrecords',
            name='Video',
            field=models.FileField(blank=True, null=True, upload_to='videos/'),
        ),
        migrations.AddField(
            model_name='medicalrecords',
            name='VideoLink',
            field=models.URLField(blank=True, null=True),
        ),
    ]
