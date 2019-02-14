from django.shortcuts import render, redirect, get_list_or_404, get_object_or_404
from django.http import HttpResponse, HttpResponseNotFound, JsonResponse
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView

from codeguru_extreme import settings
from . import models, game

import json
import os
import subprocess
import collections


def index(request):
    if request.user.is_authenticated:
        return render(request, 'page.html')
    return redirect('login')


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect(login)
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('index')

@login_required
def submit(request):
    if request.method == 'POST':
        codes = json.loads(request.POST['codes'])
        if len(codes) > 2:
            return HttpResponse('Error: You may not upload more than 2 warriors', status=409)

        if request.user.team.current_code:
            request.user.team.current_code.delete()
        
        new_code = models.Code.create(request.user.username, codes)
        request.user.team.current_code = new_code
        request.user.save()
        return JsonResponse(data={'OK': True})
    return HttpResponseNotFound()

def play_game(request):
    if request.method == 'POST':
        results = game.play()
        models.Tournament.current().save_round_results(results)
        return JsonResponse(data={'OK': True})
    return HttpResponseNotFound()

@login_required
def scores(request):
    scores = models.Result.objects.all()

    table_content = dict()
    for user in models.Result.objects.values_list('team__user__username', flat=True):
        table_content[user] = models.Result.objects.filter(team__user__username=user)

    return render(request, 'scores.html', {'rounds': range(1, models.Tournament.current().current_round), 'scores' : table_content})

class GameAdminView(TemplateView):
    template_name = 'game-admin.html'

    def current_turnament_name(self):
        print('here')
        return models.Tournament.current().name

def codes(request, username = '', version = ''):
    if username:
        if version:
            if version == 'current':
                user = get_object_or_404(models.User, username=username)
                return JsonResponse({'code': user.team.current_code.get_code()})
            else:
                return HttpResponse(status=500)
        elif username == 'current':
            if request.user.is_superuser:
                code_ids = models.Team.objects.values_list('current_code', flat=True)
                return JsonResponse({'code': [models.Code.objects.get(id=code).get_code() for code in code_ids if code]})
            else: 
                return HttpResponse(status=403)
    else:
        return HttpResponse(status=500)