from django.urls import path

from . import views
from django.contrib.auth import views as auth_views
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register/', views.register, name='register'),
    path('submit/', views.submit, name='submit'),
    path('scores/' , views.scores, name='scores'),
    path('codes/' , views.codes, name='all-codes'),
    path('codes/<str:username>' , views.codes, name='username-codes'),
    path('codes/<str:username>/<str:version>', views.codes, name='specific-code'),
    #TODO: Make these views require the 'run_round' permission
    path('admin/game/' , TemplateView.as_view(template_name='game-admin.html'), name='game-admin'),
    path('admin/play/' , views.play_game, name='play'),
]