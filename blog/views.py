from django.shortcuts import render

# Create your views here.
from .models import Post
# Create your views here.
def list(request):
   Data = {'Posts': Post.objects.all().order_by('-date')}
   return render(request, 'pages/blog.html', Data)


def post(request, id):
    post = Post.objects.get(id=id)
    return render(request, 'pages/post.html', {'post': post})