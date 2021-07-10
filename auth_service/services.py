from .models import AnonUserCounter
def get_anonuser_count():
    counter = AnonUserCounter.objects.all()
    if len(counter)==0:
        counter = AnonUserCounter.objects.create(counter=1)
    else:
        counter = counter[0]
        counter.counter+=1
    counter.save()
    return counter.counter
    
