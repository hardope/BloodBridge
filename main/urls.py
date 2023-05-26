from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name="about"),
    path('authenticate/', views.authenticate_view, name="authenticate"),
    path('appointment/new/', views.Appointment_form.as_view(), name="appointment-create"),
    path('logout/', views.logout_view, name="logout"),
]