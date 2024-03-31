from django.shortcuts import render

def Cases(request):

    return render(request, 'Cases.html' , {'activeCase' : True})



def Case_Details(request):

    return render(request, 'Case_Details.html' , {'activeCase' : True})
