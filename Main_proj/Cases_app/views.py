from django.shortcuts import render

def Cases(request):

    return render(request, 'Cases.html' , {'activeCases' : True})