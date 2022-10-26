from argparse import Action
from gc import get_objects
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .todoserializers import TaskSerializers
from .models import Todo_Task, Todo_User
# Create your views here.
from rest_framework.permissions import IsAuthenticated


class API_ViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializers
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Todo_Task.objects.all()
