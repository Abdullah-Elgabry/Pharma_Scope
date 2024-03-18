from django.urls import path
from. import views

urlpatterns = [
    path('', views.index, name='food_interaction'),
    path('view-interactions/', views.view_interactions, name='view_interactions'),
    path('drug-suggestions/', views.drug_suggestions, name='drug_suggestions'),

]