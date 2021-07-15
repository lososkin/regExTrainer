from django.db import models
from django.contrib.auth.models import User
class Task(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

class TestExample(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    test = models.TextField()
    key = models.BooleanField()

class Test(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    test = models.TextField()
    key = models.BooleanField()

class Solution(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    date_time = models.DateTimeField()
    is_correct = models.BooleanField()
    solution_text = models.TextField()
