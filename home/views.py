from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import ImageUploadForm
from .models import UploadedImage
# Create your views here.

def index(request):
    return render(request, 'pages/home.html')


def upload_image(request):
    if request.method == "POST":
        form = ImageUploadForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
    else:
        form = ImageUploadForm()

    return render(request, 'pages/upload.html', {'form': form})


def image_list(request):
    images = UploadedImage.objects.all().order_by('-uploaded_at')
    return render(request, 'pages/image_list.html', {'images': images})