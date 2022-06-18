from django.urls import path
from.import views

urlpatterns = [
    path('register', views.register, name = 'register'),
    path('login', views.login, name = 'login'),
    path('admin', views.admin, name = 'admin'),
    path('product', views.product, name = 'product'),
    path('protable', views.protable, name = 'protable')
]