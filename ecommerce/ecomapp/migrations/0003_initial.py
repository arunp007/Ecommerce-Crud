# Generated by Django 4.0.1 on 2022-06-18 07:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('ecomapp', '0002_delete_login'),
    ]

    operations = [
        migrations.CreateModel(
            name='Login',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.TextField(max_length=100)),
                ('password', models.TextField(max_length=100)),
            ],
            options={
                'db_table': 'loginregistration',
            },
        ),
    ]
