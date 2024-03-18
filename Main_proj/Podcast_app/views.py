from django.shortcuts import render
from django.http import JsonResponse
import json
from django.http import JsonResponse
import os
from dotenv import load_dotenv
load_dotenv()

def Podcast(request):

    return render(request, 'Podcast.html')



def Podcast_details(request):





    return render(request, 'Podcast-details.html')




# def fetch_data(request):
#     data = {...}
#     return JsonResponse(data, content_type='application/json')




def load(request):
    try:
        # Assuming your JSON file is named 'data.json' and is located in the same directory as views.py
        with open('./static/audio/', 'r') as file:
            json_data = json.load(file)
        return render(request, 'Podcast-details.html', {'json_data': json_data})

    except FileNotFoundError:
        # Handle the case when the file is not found
        return JsonResponse({'error': 'File not found'}, status=404)
    except json.JSONDecodeError:
        # Handle the case when the JSON data is invalid
        return JsonResponse({'error': 'Invalid JSON format'}, status=500)