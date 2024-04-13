from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required(login_url = 'signin')
def Drug_id(request):

    return render(request, 'Drug_id.html' , {'activeId' : True})