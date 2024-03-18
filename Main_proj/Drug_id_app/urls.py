from django.urls import path
from django.shortcuts import redirect
from . import views

urlpatterns = [
    path('', views.Drug_id, name='Drug_id'),
]
