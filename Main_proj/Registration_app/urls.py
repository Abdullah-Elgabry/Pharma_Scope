from django.urls import path, include
from. import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('signin/', views.signin, name='signin'),
    path('logout/', views.logout_view, name='logout'),
    path('forget_password', views.forget_password, name='forget_password'),

]