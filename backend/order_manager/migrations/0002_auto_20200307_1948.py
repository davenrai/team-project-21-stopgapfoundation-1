# Generated by Django 3.0.4 on 2020-03-07 19:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order_manager', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clientinformation',
            name='email',
        ),
        migrations.RemoveField(
            model_name='clientinformation',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='clientinformation',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='order',
            name='waiver_confirmation',
        ),
    ]