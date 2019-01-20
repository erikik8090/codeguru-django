from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Team(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    #Additional info

@receiver(post_save, sender=User)
def create_user_team(sender, instance, created, **kwargs):
    if created:
        Team.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_team(sender, instance, **kwargs):
    instance.team.save()