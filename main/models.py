from django.db import models

# Create your models here.
class Otp(models.Model):
    mail = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    otp = models.CharField(max_length=7)
    tries = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=datetime.now)