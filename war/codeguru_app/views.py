from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseNotFound, JsonResponse
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required

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
        save_results(results)
        return JsonResponse(data={'OK': True})
    return HttpResponseNotFound()

# REFACTOR_ME: Move this to tounament model (when we (me) create one)
def save_results(results):
    for team_name, score in results.items():
        team = models.User.objects.get(username=team_name).team
        result = models.Result.create(team, 1, score)
        result.save()

def scores(request):
    if request.user.is_authenticated:
        scores = models.Result.objects.all()

        table_content = dict()
        for user in models.Result.objects.values_list('team__user__username', flat=True):
            table_content[user] = models.Result.objects.filter(team__user__username=user)

        print(table_content)
        return render(request, 'scores.html', {'hey': 'asdf', 'scores' : table_content})