from django.urls import path
from . import views

urlpatterns = [
    path('', views.Home, name='Home'),
    path('article_one/', views.article_one, name='article_one'),
    path('article_two/', views.article_two, name='article_two'),
    path('article_three/', views.article_three, name='article_three'),
    path('news_one/', views.news_one, name='news_one'),
    path('news_two/', views.news_two, name='news_two'),
    path('news_three/', views.news_three, name='news_three'),
    path('news_four/', views.news_four, name='news_four'),

    #path('chatbot/', views.chatbot, name='chatbot'),
]