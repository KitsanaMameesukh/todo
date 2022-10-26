from django.contrib import admin
from .models import Todo_Task, Todo_User
# Register your models here.

admin.site.register(Todo_Task),
admin.site.register(Todo_User),
