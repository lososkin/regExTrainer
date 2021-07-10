from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
	path('api/login/', obtain_auth_token),
        path('api/create_anon_user/', views.create_anon_user),
        path('api/checktoken/', views.checktoken),
        path('api/signup/', views.signup),
]
