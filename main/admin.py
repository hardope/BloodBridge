from django.contrib import admin
from .models import Otp

# Register your models here.
admin.site.site_header = "BloodBridge Admin"
admin.site.site_title = "BloodBridge Admin Portal"
admin.site.index_title = "Welcome to BloodBridge Admin Portal"
admin.site.register(Otp)