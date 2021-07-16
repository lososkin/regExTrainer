from . import models
import re
def check_solution(task,solution):
    is_correct = True
    tests = models.Test.objects.filter(task=task)
    for test in tests:
        try:
            if test.key!=bool(re.fullmatch(solution,test.test)):
                is_correct = False
                break
        except:
            is_correct = False
            break
    return is_correct
