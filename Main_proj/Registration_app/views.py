from .models import *
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect, render,HttpResponse
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

def signup(request):
    if request.method == "POST":
        first_name = request.POST['first_name']
        family_name = request.POST['family_name']
        username = request.POST['username']
        password = request.POST['password']
        phone_number = request.POST['phone_number']

        try:
            validate_password(password)
        except ValidationError as error:
            weak_password_error = error.messages[0]
            return render(request, 'signup.html', {'weak_password_error': weak_password_error})


        if len(phone_number) != 10:
            phone_number_error = "Phone number must be 10 digits."
            return render(request, 'signup.html', {'phone_number_error': phone_number_error})


        if User.objects.filter(username=username).exists():
            username_error = "This username is already taken. Please choose another one."
            return render(request, 'signup.html', {'username_error': username_error})
        else:

               user = User.objects.create_user(first_name=first_name ,last_name=family_name, username=username, password=password)
               userprofile =UserProfile.objects.create(user=user, phone_number=phone_number)
               user.save()
               userprofile.save()
               return render(request, "signin.html")


    return render(request, "signup.html")

def signin(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            next_page = request.GET.get('next')
            if next_page:
                return redirect(next_page)
            else:
                return redirect('Home')
        else:
            error_message = "Invalid Username or Password."
            return render(request, "signin.html", {'error_message': error_message})
    return render(request, "signin.html")

def logout_view(request):
    logout(request)
    return redirect('Home')

def forget_password(request):
    return render(request, 'forget_password.html')

