from django.urls import path
from.import views

urlpatterns = [
    path('register', views.register, name = 'register'),
    path('login', views.login, name = 'login'),
    path('admin', views.admin, name = 'admin'),
    path('product', views.product, name = 'product'),
    path('protable', views.protable, name = 'protable'),
    path('update/<int:id>', views.update, name = 'update'),
    path('delete/<int:id>', views.delete, name = 'delete'),
    path('userregistration', views.userregistration, name = 'userregistration'),
    path('usertable', views.usertable, name = 'usertable'),
    path('userhome', views.userdashboard, name = 'userhome'),
    path('products', views.products, name = 'products'),
    path('userlogin', views.userlogin, name = 'userlogin'),
    path('adminlogout', views.adminlogout, name = 'adminlogout'),
    path('userlogout', views.userlogout, name = 'userlogout')
]