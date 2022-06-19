from django.db import models

class Admin(models.Model):
    user = models.TextField(max_length=100)
    password = models.TextField(max_length=100)
    email = models.TextField(max_length=100)

    class Meta:
        db_table = 'adminregistration'

class Product(models.Model):
    model = models.TextField(max_length=30)
    brand = models.TextField(max_length=30)
    rate = models.TextField(max_length=30)
    image = models.CharField(max_length=100)

    class Meta:
        db_table = 'mobileregistration'

class User(models.Model):
    name = models.TextField(max_length=100)
    email = models.TextField(max_length=100)
    contact = models.TextField(max_length=100)
    username = models.TextField(max_length=100)
    password = models.TextField(max_length=100)
    cpassword = models.TextField(max_length=100)

    class Meta:
        db_table = 'userregistration'

