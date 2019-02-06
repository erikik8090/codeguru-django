from django.urls import path

from . import views
from django.contrib.auth import views as auth_views
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('register/', views.register, name='register'),
    path('submit/', views.submit, name='submit'),
    path('scores/' , views.scores),
    #TODO: Make these views require the 'run_round' permission
    path('admin/game/' , TemplateView.as_view(template_name='game-admin.html')),
    path('admin/play/' , views.play_game, name='play'),
]