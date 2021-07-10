from django.shortcuts import render
from django.contrib.auth.models import User
from .services import get_anonuser_count
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.status import (
	HTTP_400_BAD_REQUEST,
	HTTP_404_NOT_FOUND,
	HTTP_200_OK
)

@csrf_exempt
def create_anon_user(request):    
    user = User.objects.create(username="AnonUser"+str(get_anonuser_count()))
    token = Token.objects.create(user=user)
    return JsonResponse({'username':user.username,'token':token.key}, status=HTTP_200_OK)

@csrf_exempt
@api_view(["POST"])
@permission_classes((IsAuthenticated,))
def checktoken(request):
    return JsonResponse({'detail':'ok'}, status=HTTP_200_OK)


@csrf_exempt
@api_view(["POST"])
def signup(request):
    username = request.data.get("username")
    password = request.data.get("password")

    if username == "" or username is None:
        return JsonResponse({'error':'Username field must be not empty.'}, status=HTTP_400_BAD_REQUEST)
    if password== "" or password is None:
        return JsonResponse({'error':'Password field must be not empty.'}, status=HTTP_400_BAD_REQUEST)
    if username[:8]=="AnonUser":
        return JsonResponse({'error':'Username can\'t start with "AnonUser".'}, status=HTTP_400_BAD_REQUEST)
    is_username_unique = len(User.objects.filter(username=username))==0
    if not is_username_unique:
        return JsonResponse({'error':'User with same username already exists.'}, status=HTTP_400_BAD_REQUEST)
    request.user.set_password(password)
    request.user.username = username
    request.user.save()
    return JsonResponse({'detail':'ok'}, status=HTTP_200_OK)
