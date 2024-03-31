from django.urls import path
from django.shortcuts import redirect
from . import views

urlpatterns = [
    path('', views.Cases, name='Cases'),
    path('Case-Details/', views.Case_Details, name='Case_Details'),
]
