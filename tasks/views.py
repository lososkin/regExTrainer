from django.shortcuts import render
from . import models
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
import json
from rest_framework.status import HTTP_400_BAD_REQUEST
import datetime
from . import services

@csrf_exempt
@api_view(["GET"])
@permission_classes((IsAuthenticated,))
def get_tasks(request):
    r = [ {'id':x.id, 'name':x.name, 'description':x.description, 'is_solved': True if len(models.Solution.objects.filter(user=request.user,task=x,is_correct=True))>0 else False} for x in models.Task.objects.all() ]
    return JsonResponse(r, safe=False)


@csrf_exempt
@api_view(["POST"])
@permission_classes((IsAuthenticated,))
def get_task(request):
    id_task = request.data.get('id')
    if id_task is None:
        return JsonResponse({'error':'id must not be empty'}, status=HTTP_400_BAD_REQUEST)

    try:
        id_task = int(id_task)
    except ValueError:
        return JsonResponse({'error':'id must be a number'}, status=HTTP_400_BAD_REQUEST)
    try:
        task = models.Task.objects.get(id=id_task)
    except models.Task.DoesNotExist:
        return JsonResponse({'error':'Task with this id does not exist'}, status=HTTP_400_BAD_REQUEST)
    test_example = [{'test':x.test,'key':x.key} for x in models.TestExample.objects.filter(task=task)]
    return JsonResponse({'id':id_task,'name':task.name,'description':task.description,'tests_example':test_example})

@csrf_exempt
@api_view(["POST"])
@permission_classes((IsAuthenticated,))
def post_solution(request):
    id_task = request.data.get('id')
    if id_task is None:
        return JsonResponse({'error':'id must not be empty'}, status=HTTP_400_BAD_REQUEST)

    try:
        id_task = int(id_task)
    except ValueError:
        return JsonResponse({'error':'id must be a number'}, status=HTTP_400_BAD_REQUEST)
    try:
        task = models.Task.objects.get(id=id_task)
    except models.Task.DoesNotExist:
        return JsonResponse({'error':'Task with this id does not exist'}, status=HTTP_400_BAD_REQUEST)
    solution = request.data.get('solution')
    if solution is None:
        return JsonResponse({'error':'solution must not be empty'}, status=HTTP_400_BAD_REQUEST)
    is_correct = services.check_solution(task,solution)
    models.Solution.objects.create(user=request.user, task=task, is_correct=is_correct, date_time=datetime.datetime.now()).save()
    return JsonResponse({'is_correct':is_correct})
def main_view(request):
    return render(request, 'tasks/index.html')
