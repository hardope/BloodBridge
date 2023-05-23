from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('authenticate/', views.authenticate_view, name="authenticate"),
    path('logout/', views.logout_view, name="logout"),
]