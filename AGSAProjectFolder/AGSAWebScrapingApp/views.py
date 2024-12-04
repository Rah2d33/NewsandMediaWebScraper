from django.shortcuts import render

# Create your views here.

def splash_screen(request):
    return render(request, 'splashscreen.html')

# ==========================================================

def index(request):
    return render(request, 'index.html')

# ==========================================================



# ==========================================================



# ==========================================================



