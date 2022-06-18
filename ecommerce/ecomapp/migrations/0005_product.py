# Generated by Django 4.0.1 on 2022-06-18 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecomapp', '0004_admin_delete_login'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model', models.TextField(max_length=100)),
                ('brand', models.TextField(max_length=100)),
                ('rate', models.TextField(max_length=100)),
                ('image', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'mobileregistration',
            },
        ),
    ]