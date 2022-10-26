from rest_framework import serializers
from .models import Todo_Task, Todo_User


class Userserializers(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id_user',
            'name',
        )

        model = Todo_User


class TaskSerializers(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id_task',
            'task',
            'start_date',
            'end_date',
            'mod_date',
            'stat',
            'todo_list',
        )

        model = Todo_Task
