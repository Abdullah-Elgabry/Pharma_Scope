from django.shortcuts import render
from django.http import JsonResponse
import json
from django.http import JsonResponse
import os
from dotenv import load_dotenv
load_dotenv()

def Podcast(request):
    return render(request, 'Podcast.html')

def Pharmaceutical_manufacturing(request):
    return render(request, 'Pharmaceutical_manufacturing.html')

def Mechanisms_of_interactions(request):
    return render(request, 'Mechanisms_of_interactions.html')

def Medical_Medium_Podcast(request):
    return render(request, 'Medical_Medium_Podcast.html')

def Medical_podcasts(request):
    return render(request, 'Medical_podcasts.html')

def pharmaceutical_Magazine(request):
    return render(request, 'pharmaceutical_Magazine.html')

def pharmaceutical_technology(request):
    return render(request, 'pharmaceutical_technology.html')
# def pharmaceutical_technology(request,podcast_id):
#     return render(request, 'pharmaceutical_technology.html' , {'id' : podcast_id})
