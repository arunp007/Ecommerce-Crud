from django.shortcuts import render, redirect
from random import random
from django.core.files.storage import FileSystemStorage
from.models import *

def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        email = request.POST['email']
        admininfo = Admin(user = username, password = password, email = email)
        admininfo.save()

    return render(request, 'register.html')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        try:
            current_user = Admin.objects.get(user = username, password = password)
            request.session['xyz'] = current_user.id
            return redirect('admin')

        except Admin.DoesNotExist:
            return render(request, 'login.html', {'message': "Username And Password Is Wrong"})
    
    return render(request,'login.html')


def admin(request):
    return render(request, 'admin.html')

def product(request):
    if request.method == 'POST':
        model = request.POST['model']
        brand = request.POST['brand']
        rate = request.POST['rate']
        image = request.FILES['image']
        file_name = str(random()) + image.name
        image.name = file_name
        file_object = FileSystemStorage()
        file_object.save(file_name, image)
        product_details = Product(model=model, brand=brand, rate=rate, image=image)
        product_details.save()
    return render(request, 'product.html')


def protable(request):
    productdetails = Product.objects.all()
    return render(request, 'pro_table.html', {'details': productdetails})
