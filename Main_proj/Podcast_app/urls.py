from django.urls import path
from django.shortcuts import redirect
from . import views

urlpatterns = [
    path('', views.Podcast, name='Podcast'),
    path('Pharmaceutical_manufacturing', views.Pharmaceutical_manufacturing, name='Pharmaceutical_manufacturing'),
    path('Mechanisms_of_interactions', views.Mechanisms_of_interactions, name='Mechanisms_of_interactions'),
    path('Medical_Medium_Podcast', views.Medical_Medium_Podcast, name='Medical_Medium_Podcast'),
    path('Medical_podcasts', views.Medical_podcasts, name='Medical_podcasts'),
    path('pharmaceutical_Magazine', views.pharmaceutical_Magazine, name='pharmaceutical_Magazine'),
    path('pharmaceutical_technology', views.pharmaceutical_technology, name='pharmaceutical_technology'),
]
