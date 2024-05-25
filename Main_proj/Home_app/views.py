from django.shortcuts import render
import json
import openai, os
from dotenv import load_dotenv
from django.conf import settings
from django.http import JsonResponse

load_dotenv()

api_key = os.getenv("OPENAI_KEY", None)
openai.api_key = api_key

def Home(request):
    chatbot_response = ""
    if request.method == 'POST':
        user_input = request.POST.get('user_input')
        if user_input:
            try:
                response = openai.Completion.create(
                    engine="gpt-3.5-turbo-instruct",
                    prompt=user_input,
                    max_tokens=256,
                    temperature=0.5
                )
                chatbot_response = response.choices[0].text.strip()

                return JsonResponse({'result':chatbot_response})
                

            except openai.OpenAIError as e:
                print("OpenAI Error:", e)
                print("uncaught")

    context = {'response': chatbot_response}
    return render(request, 'Home.html', context)

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

