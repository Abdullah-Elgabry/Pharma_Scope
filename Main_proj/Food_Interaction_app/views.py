from django.shortcuts import render
from .models import Interaction, Drug
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

@login_required(login_url = 'signin')
def index(request):
    return render(request,'food_interaction.html',{'activeFood': True})

def view_interactions(request):
    if request.method == 'POST':
        drug_name = request.POST.get('drug_name')
        interactions = Interaction.objects.filter(drug__name=drug_name)
        num_interactions = interactions.count()
        interactions_list = [{'description': interaction.description} for interaction in interactions]
        return JsonResponse({'num_interactions': num_interactions, 'interactions': interactions_list})
    return render(request, 'food_interaction.html' , {'activeFood': True})


def drug_suggestions(request):
    if 'search' in request.GET:
        search_query = request.GET['search']
        drugs = Drug.objects.filter(name__icontains=search_query)[:10]
        suggestions = [{'name': drug.name} for drug in drugs]
        return JsonResponse(suggestions, safe=False)
    else:
        return JsonResponse({'error': 'Search parameter not provided'}, status=400)
