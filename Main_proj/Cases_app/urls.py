from django.urls import path
from django.shortcuts import redirect
from . import views

urlpatterns = [
    path('', views.Cases, name='Cases'),
    path('Case-one/', views.case_one, name='case_one'),
    path('Case-two/', views.case_two, name='case_two'),
    path('Case-three/', views.case_three, name='case_three'),


]
