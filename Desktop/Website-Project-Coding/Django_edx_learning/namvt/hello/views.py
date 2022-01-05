from django.shortcuts import render
from django.http import HttpResponse

# Create your tests here.
def index(request):
    return render(request, "hello/index.html")

def namvt(request):
    return HttpResponse("Hello Nam!")

def greet(request, name):
    return render(request, "hello/greet.html", {
        "name" : name.capitalize()
    })
