from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.files.base import File

import os
import shutil

from codeguru_extreme import settings

class Code(models.Model):
    
    warrior1 = models.FileField(upload_to='codes/')
    warrior2 = models.FileField(upload_to='codes/')

    @classmethod
    def create_from_code(cls, old_code, username, round_number):
        model = cls()

        cls._copy_file(model.warrior1, old_code.warrior1.path, os.path.join(username, f'{round_number}1.s'))
        cls._copy_file(model.warrior2, old_code.warrior2.path, os.path.join(username, f'{round_number}2.s'))

        return model

    @classmethod
    def create(cls, username, codes):
        if len(codes) > 2:
            raise RuntimeError('Tried to create a Code instance with more than 2 warriors')
        model = cls()

        if len(codes) == 1:
            cls._save_file(model.warrior1, username, 'current', codes[0]['code'])
        else:
            cls._save_file(model.warrior1, username, 'current1', codes[0]['code'])
            cls._save_file(model.warrior2, username, 'current2', codes[1]['code'])
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
    def _copy_file(file_field, old_file_path, new_file_name):
        if not old_file_path or not os.path.exists(old_file_path):
            return
        
        if os.path.exists(os.path.join(settings.MEDIA_ROOT, 'codes', new_file_name)):
            print('WARNING: Overwriting existing code files - round files already existing')
            os.remove(os.path.join(settings.MEDIA_ROOT, 'codes', new_file_name))
        with open(old_file_path, 'r') as f:
            file_field.save(new_file_name, File(f), save=True)

    @staticmethod
    def _save_file(file_field, username, name, content):
        path = [settings.MEDIA_ROOT,'codes',username]
        filename = os.path.join(username, name + '.s')

        Code._dir_exists(path)
        temp = os.path.join(*path,'temp.s')

        with open(temp, 'w') as f:
            f.write(content)
        
        with open(temp, 'r') as f:
            file_field.save(filename, File(f), save=True)
        os.remove(temp)
    
    """
    Makes sure that the dir at this path exists, and if not - creates it.
    """
    @staticmethod
    def _dir_exists(path):
        current_path_list = []
        for element in path:
            current_path_list.append(element)
            current_path = os.path.join(*current_path_list)
            if not os.path.exists(current_path):
                os.mkdir(current_path)
        

class Team(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    #Additional info
    current_code = models.ForeignKey(Code, null=True, on_delete=models.SET_NULL) #Just copy over the file later. TODO: Find a better way to do this 

    def __str__(self):
        return f'User:{self.user}'


@receiver(post_save, sender=User)
def create_user_team(sender, instance, created, **kwargs):
    if created:
        Team.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_team(sender, instance, **kwargs):
    instance.team.save()


class Result(models.Model):
    round = models.PositiveSmallIntegerField()
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    score = models.PositiveSmallIntegerField()
    code = models.ForeignKey(Code, on_delete=models.CASCADE)

    @classmethod
    def create(cls, team, round, score):
        model = cls()
        model.team = team
        model.round = round
        model.score = score
        model.code = Code.create_from_code(team.current_code, team.user.username, round)
        return model

    def __str__(self):
        return f'{self.team.user.username} - {self.round}, Score: {self.score}'