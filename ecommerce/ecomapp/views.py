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


def update(request,id):
    if request.method == 'POST':
        updatedata = ''
        model = request.POST['model']
        brand = request.POST['brand']
        rate = request.POST['rate']
        image = request.FILES['image']
        Product.objects.filter(id=id).update(model = model,brand = brand, rate = rate, image = image)
        return redirect('protable')

    else:
        updatedata = Product.objects.get(id=id)
    return render(request, 'product.html', {'update': updatedata})



def delete(request,id):
    Product.objects.get(id=id).delete()
    return redirect('protable')

def userregistration(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        contact = request.POST['contact']
        username = request.POST['username']
        password = request.POST['password']
        cpassword = request.POST['cpassword']
        userdetails = User(name = name, email = email, contact = contact, username = username, password = password, cpassword = cpassword)
        userdetails.save()
    return render(request, 'user_registration.html')


def usertable(request):
    userdata = User.objects.all()
    return render(request, 'user_table.html', {'data': userdata})


def userdashboard(request):
    return render(request, 'user_dashboard.html')

def products(request):
    productdata = Product.objects.all()
    return render(request, 'products.html', {'product': productdata})


def userlogin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        try:
            current_user = User.objects.get(username = username, password = password)
            request.session['xyz'] = current_user.id
            return redirect('user')

        except User.DoesNotExist:
            return render(request, 'user_login.html', {'message': "Username And Password Is Wrong"})
    
    return render(request,'user_login.html')

def adminlogout(request):
    request.session.flush()
    return redirect('login')


def userlogout(request):
    request.session.flush()
    return redirect('userlogin')

    
