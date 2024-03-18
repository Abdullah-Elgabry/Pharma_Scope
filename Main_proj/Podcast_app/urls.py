from django.urls import path
from django.shortcuts import redirect
from . import views

urlpatterns = [
    path('', views.Podcast, name='Podcast'),
    path('details', views.Podcast_details, name='Podcast-details'),
]
