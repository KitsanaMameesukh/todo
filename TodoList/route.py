from rest_framework import routers
from api_todo.viewsets import API_ViewSet
# from rest_framework.routers import DefaultRouter
from api_todo.views import AuthUser

router = routers.DefaultRouter()
router.register('home', API_ViewSet, basename='home'),
# router.register('login', AuthUser.as_view(), basename='login')
