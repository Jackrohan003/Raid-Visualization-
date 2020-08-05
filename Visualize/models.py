from django.db import models

class RaidDetails(models.Model):
    numDisks = models.IntegerField()
    numRequest = models.IntegerField()
    writeFrac = models.IntegerField()
    level = models.IntegerField()
    raid5  = models.CharField(max_length=2)
    submitted = models.BooleanField()
    

