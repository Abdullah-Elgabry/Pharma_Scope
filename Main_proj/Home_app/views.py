from django.shortcuts import render
import json
#import openai, os
from dotenv import load_dotenv
from django.conf import settings
import json

#load_dotenv()
#api_key = os.getenv("OPENAI_KEY", None)
#OPENAI_KEY='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'
#openai.api_key = OPENAI_KEY



# def Home(request):
#     chatbot_response = ""
#     if request.method == 'POST':
#         user_input = request.POST.get('user_input')
#         if user_input:
#             try:
#                 response = openai.completions.create(
#                     model='gpt-3.5-turbo-instruct',
#                     prompt=user_input,
#                     max_tokens=256,
#                     temperature=0.5
#                 )
#                 chatbot_response = response.choices[0].text.strip()
#             except openai.error.OpenAIError as e:
#                 chatbot_response = f"Error: {e}"
#
#     context = {'response': chatbot_response}
#     return render(request, 'Home.html', context)

def Home(request):
    return render(request,'Home.html')


def article_one(request):
    return render(request,'article_one.html')

def article_two(request):
    return render(request,'article_two.html')

def article_three(request):
    return render(request,'article_three.html')

def news_one(request):
    return render(request, 'news_one.html')

def news_two(request):
    return render(request, 'news_two.html')

def news_three(request):
    return render(request, 'news_three.html')

def news_four(request):
    return render(request, 'news_four.html')

