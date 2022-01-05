from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from django.http import HttpResponse
from django import forms
from django.http import HttpResponseRedirect
from django.urls import reverse

#tasks = ["foo", "bar", "baz"]

class NewTaskForm(forms.Form):
    task1 = forms.CharField(label="New Task")
    #Priority = forms.IntegerField(min_value=1, max_value=10)


# Create your views here.
def index(request):
    if "tasks" not in request.session:
        request.session["tasks"]= []
    return render(request, "task/index.html",{
        "task": request.session["tasks"]
    })

def add(request):
    if request.method == "POST":
        form = NewTaskForm(request.POST)
        if form.is_valid():
            task = form.cleaned_data["task1"]
            request.session["tasks"] += [task]
            return HttpResponseRedirect(reverse("task:index"))
        else:
            return render(request, "task/add.html", {
                "form":form
            })

    return render(request, "task/add.html", {
        "form": NewTaskForm()
    })