# Generated by Django 2.1.5 on 2019-02-07 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('codeguru_app', '0006_result_tournament'),
    ]

    operations = [
        migrations.AddField(
            model_name='tournament',
            name='name',
            field=models.CharField(default='test', max_length=120),
            preserve_default=False,
        ),
    ]
