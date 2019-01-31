from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.files.base import File


import os
from codeguru_extreme import settings

class Code(models.Model):
    warrior1 = models.FileField(upload_to='codes/')
    warrior2 = models.FileField(upload_to='codes/')

    @classmethod
    def create(cls, username, codes):
        if len(codes) > 2:
            raise RuntimeError('Tried to initiate a Code instance with more than 2 warriors')
        model = cls()

        if len(codes) == 1:
            cls._save_file(model.warrior1, username, codes[0]['name'], codes[0]['code'])
        else:
            cls._save_file(model.warrior1, username, codes[0]['name'], codes[0]['code'])
            cls._save_file(model.warrior2, username, codes[1]['name'], codes[1]['code'])
        model.save()
        return model

    def delete(self, *args, **kwargs):
        try:
            os.remove(self.warrior1.path)
            os.remove(self.warrior2.path)
        except:
            print('The following file/s have already been removed when trying to delete Code object:\n' 
                + self.warrior1.path
                + '\n'
                + self.warrior2.path if self.warrior2 else '')
        super().delete(*args, **kwargs)

    @staticmethod
    def _save_file(file, username, name, code):
        
        if not os.path.exists(settings.MEDIA_ROOT):
            os.mkdir(settings.MEDIA_ROOT)

        if not os.path.exists(os.path.join(settings.MEDIA_ROOT,'codes',)):
            os.mkdir(os.path.join(settings.MEDIA_ROOT,'codes'))

        if not os.path.exists(os.path.join(settings.MEDIA_ROOT,'codes',username)):
            os.mkdir(os.path.join(settings.MEDIA_ROOT,'codes',username))

        path = os.path.join(settings.MEDIA_ROOT,'codes', username)
        temp = os.path.join(path,'temp.s')
        filename = os.path.join(username, name)

        with open(temp, 'w') as f:
            f.write(code)
        
        with open(temp, 'r') as f:
            file.save(filename, File(f), save=True)
        os.remove(temp)


class Team(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    #Additional info
    current_code = models.ForeignKey(Code, null=True, on_delete=models.CASCADE) #Just copy over the file later. TODO: Find a better way to do this 

    def __str__(self):
        return f'<Team - User:{self.user}>'



@receiver(post_save, sender=User)
def create_user_team(sender, instance, created, **kwargs):
    if created:
        Team.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_team(sender, instance, **kwargs):
    instance.team.save()