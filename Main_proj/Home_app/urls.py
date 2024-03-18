from django.urls import path
from . import views  # Import your views.py

urlpatterns = [
    path('', views.Home, name='Home'),
    #path('chatbot/', views.chatbot, name='chatbot'),
]