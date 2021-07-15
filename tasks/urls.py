from django.urls import path
from . import views

urlpatterns = [
        path('api/tasks/', views.get_tasks),
        path('api/task/', views.get_task),
        path('api/solution/', views.post_solution),
        path('', views.main_view),
]

