from django.contrib import admin
from . import models

class TestExampleInline(admin.TabularInline):
    model = models.TestExample
    extra = 1

class TestInline(admin.TabularInline):
    model = models.Test
    extra = 1

class TaskAdmin(admin.ModelAdmin):
    inlines = [TestExampleInline, TestInline]

admin.site.register(models.Task, TaskAdmin)
admin.site.register(models.Solution)
