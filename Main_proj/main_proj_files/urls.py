"""
URL configuration for drug_interaction_website project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Home_app.urls')),
    path('drug-drug-interactions/', include('drug_interaction.urls')),
    path('Drug_id/', include('Drug_id_app.urls')),
    path('Podcast/', include('Podcast_app.urls')),
    path('Food-Drug-Interactions/', include('Food_Interaction_app.urls')),
    path('Cases', include('Cases_app.urls')),

]
