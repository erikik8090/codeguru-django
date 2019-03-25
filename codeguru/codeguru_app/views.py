from django.shortcuts import render, redirect, get_list_or_404, get_object_or_404
from django.http import HttpResponse, HttpResponseNotFound, JsonResponse, HttpResponseRedirect
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
import itertools


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
            return redirect('index')
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})


def logout_view(request):
    logout(request)
    return redirect('index')


@login_required
def submit(request):
    if request.method == 'POST':
        codes = json.loads(request.POST['codes_data'])
        if len(codes['codes']) > 2:
            return HttpResponse('Error: You may not upload more than 2 warriors', status=409)

        if request.user.team.current_code.name == codes['name']:
            revision = request.user.team.current_code.revision + 1
        else:
            revision = 0

        new_code = models.Code.create(
            request.user.team, codes['codes'], codes['name'], revision)
        new_code.save()
        return JsonResponse(data={'OK': True})
    return HttpResponseNotFound()


def play_game(request):
    if request.method == 'POST':
        results = game.play([team.current_code.get_paths()
                             for team in models.Team.objects.all()])
        models.Tournament.current().save_round_results(results)
        return JsonResponse(data={'OK': True})
    return HttpResponseNotFound()


@login_required
def scores(request):
    scores = models.Result.objects.all()

    table_content = dict()
    for user in models.Result.objects.values_list('team__user__username', flat=True):
        table_content[user] = models.Result.objects.filter(
            team__user__username=user)

    try:
        current_round = models.Tournament.current().current_round
    except AttributeError:
        current_round = 1

    return render(request, 'scores.html', {'rounds': range(1, current_round), 'scores': table_content})


class GameAdminView(TemplateView):
    template_name = 'game-admin.html'

    def current_turnament(self):
        return models.Tournament.current()

    def current_tournament_rounds(self):
        return models.Tournament.current().current_round


def codes(request, username='', version=''):
    if username:
        if version:
            if version == 'current':
                user = get_object_or_404(models.User, username=username)
                return JsonResponse({'code': user.team.current_code.get_code()})
            else:
                return HttpResponse(status=500)
        elif username == 'current':
            if request.user.is_superuser:
                return JsonResponse({'code': [team.current_code.get_code() for team in models.Team.objects.all()]})
            else:
                return HttpResponse(status=403)
    else:
        return HttpResponse(status=500)


class FeaturesMenuView(TemplateView):
    template_name = 'features-menu.html'

    def post(self, request):
        for feature in models.features:
            feature.enabled = feature.name in request.POST
        print(models.features)
        return HttpResponseRedirect(self.request.path_info)

    def current_turnament(self):
        return models.Tournament.current()

    def registered_features(self):
        return models.features

def enabledFeatures(request):
    return JsonResponse({'features': [f.name for f in models.features if f.enabled]})