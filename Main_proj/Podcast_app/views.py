from django.shortcuts import render
from django.http import JsonResponse
import json
from django.http import JsonResponse
import os
from django.contrib.auth.decorators import login_required
from dotenv import load_dotenv
load_dotenv()

@login_required(login_url = 'signin')
def Podcast(request):
    return render(request, 'Podcast.html' , {'activePodcast': True})

def Pharmaceutical_manufacturing(request):
    return render(request, 'Pharmaceutical_manufacturing.html', {'activePodcast': True})

def Mechanisms_of_interactions(request):
    return render(request, 'Mechanisms_of_interactions.html', {'activePodcast': True})

def Medical_Medium_Podcast(request):
    return render(request, 'Medical_Medium_Podcast.html', {'activePodcast': True})

def Medical_podcasts(request):
    return render(request, 'Medical_podcasts.html', {'activePodcast': True})

def pharmaceutical_Magazine(request):
    return render(request, 'pharmaceutical_Magazine.html', {'activePodcast': True})

def pharmaceutical_technology(request):
    return render(request, 'pharmaceutical_technology.html', {'activePodcast': True})
# def pharmaceutical_technology(request,podcast_id):
#     return render(request, 'pharmaceutical_technology.html' , {'id' : podcast_id})
