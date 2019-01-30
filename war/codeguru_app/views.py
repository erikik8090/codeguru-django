from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseNotFound, JsonResponse
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm


# Create your views here.
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
            return "Logged in sucssefully"
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})

def submit(request):
    if request.method == 'POST':
        print(request.POST)
        return JsonResponse(data={'OK' : True})
    else:
        return HttpResponseNotFound()