from django.shortcuts import render

def Cases(request):

    return render(request, 'Cases.html' , {'activeCase' : True})



def case_one(request):

    return render(request, 'case_one.html' , {'activeCase' : True})

def case_two(request):

    return render(request, 'case_two.html' , {'activeCase' : True})

def case_three(request):

    return render(request, 'case_three.html' , {'activeCase' : True})
