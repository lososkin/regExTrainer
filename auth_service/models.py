from django.db import models

class AnonUserCounter(models.Model):
    counter = models.IntegerField(default=0)
