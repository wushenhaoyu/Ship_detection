# Generated by Django 4.2.11 on 2024-05-15 20:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0029_remove_historyrecords_photolink_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='historyrecords',
            name='AdviceTime',
        ),
    ]
