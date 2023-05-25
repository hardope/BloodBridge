from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

# Create your models here.
class Otp(models.Model):
    mail = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    otp = models.CharField(max_length=7)
    tries = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=datetime.now)

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=100, default='')
    phone = models.CharField(max_length=10, default='')
    city = models.CharField(max_length=100, default='')
    state = models.CharField(max_length=100, default='')
    donor = models.BooleanField(default=True)