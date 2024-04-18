import os
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from .utils import predict_image

@login_required(login_url='signin')
def Drug_id(request):
    return render(request, 'Drug_id.html', {'activeId': True})

def classify_image(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_image = request.FILES['file']

        with open('uploaded_image.jpg', 'wb') as f:
            for chunk in uploaded_image.chunks():
                f.write(chunk)

        class_name = predict_image('uploaded_image.jpg')

        os.remove('uploaded_image.jpg')

        return JsonResponse({'result': class_name})
    else:
        return JsonResponse({'error': 'No image uploaded'}, status=400)
