from django.shortcuts import render
import json
import openai, os
from dotenv import load_dotenv
from django.conf import settings
import json

load_dotenv()
api_key = os.getenv("OPENAI_KEY", None)
openai.api_key = api_key

def Home(request):
    chatbot_response = ""
    if request.method == 'POST':
        user_input = request.POST.get('user_input')
        if user_input:
            try:
                response = openai.completions.create(
                    model='gpt-3.5-turbo-instruct',
                    prompt=user_input,
                    max_tokens=256,
                    temperature=0.5
                )
                chatbot_response = response.choices[0].text.strip()
            except openai.error.OpenAIError as e:
                chatbot_response = f"Error: {e}"

    context = {'response': chatbot_response}
    return render(request, 'Home.html', context)