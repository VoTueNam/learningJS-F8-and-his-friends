from django.urls import path

from . import views

urlpatterns = [
    path("/nam", views.namvt, name="nam"),
    path("<str:name>", views.greet, name="greet"),
    path("", views.index, name="index")
]