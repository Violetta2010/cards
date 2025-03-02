from django.urls import path
from . import views
from .views import upload_image,image_list, get_images
urlpatterns = [
   path('', views.index),
   path('upload/', upload_image, name='upload_image'),
   path('images/', image_list, name='image_list'),
   path("get_images/", get_images, name="get_images"),
]
