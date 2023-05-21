from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.models import User

# Create your views here.
def index(request):
    return HttpResponse("Hello, world.... You're at the main index.")