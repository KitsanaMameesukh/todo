from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from typing_extensions import Self
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
# Create your models here.


class Todo_User(models.Model):

    id_user = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Todo_Task(models.Model):
    id_task = models.AutoField(primary_key=True)
    task = models.CharField(max_length=255)
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(default=timezone.now)
    mod_date = models.DateTimeField(default=timezone.now)
    stat = models.BooleanField(default=False)
    todo_list = models.ForeignKey(Todo_User, on_delete=models.CASCADE)

    def __str__(self):
        return self.task

    class Meta:
        ordering = ('-end_date',)


# class CustomUser(BaseUserManager):
#     def create_user(self, email, user_name, first_name, password, **other_fields):
#         if not email:
#             raise ValueError(_('Please enter an email address'))

#         email = self.normalize_email(email)
#         user = self.model(email=email, user_name=user_name,
#                           first_name=first_name, **other_fields)
#         user.set_password(password)
#         user.save()
#         return user


# class NewUser(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(max_length=150, unique=True)
#     user_name = models.CharField(max_length=150, unique=True)
#     first_name = models.CharField(max_length=150, blank=True)
#     start_date = models.DateTimeField(default=timezone.now)
#     about = models.TextField(max_length=500, blank=True)
#     is_staff = models.BooleanField(default=False)
#     is_active = models.BooleanField(default=False)
#     objects = CustomUser()

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['user_name', 'first_name']

#     def __str__(self):
#         return self.user_name
