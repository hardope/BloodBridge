from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('authenticate/', views.authenticate_view, name="authenticate"),
]