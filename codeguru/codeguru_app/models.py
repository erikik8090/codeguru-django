from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.files.base import File

import os
import shutil

from codeguru_extreme import settings


class Tournament(models.Model):
    name = models.CharField(max_length=120)
    active = models.BooleanField(default=True)
    # NOTE: Maybe change this to many-to-one model with a Round class?
    # Maybe useful if we need to save more data on each round
    rounds = models.PositiveSmallIntegerField(default=0)

    @classmethod
    def current(cls):
        return cls.objects.first()

    @property
    def current_round(self):
        return self.rounds + 1

    def save_round_results(self, results):
        for team_name, score in results.items():
            team = User.objects.get(username=team_name).team
            result = Result.create(team, self, score)
            result.save()
        self.rounds += 1
        self.save()

    def reset(self):
        self.rounds = 0
        for result in self.result_set.all():
            result.delete()
        self.save()

    def __str__(self):
        return self.name


class Team(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    @property
    def current_code(self):
        return Code.objects.filter(creator=self).order_by('-creation_date')[0]

    def __str__(self):
        return f'User:{self.user}'


default_code = """# Welcome to CodeGuru RISC-V!
j x1

"""


@receiver(post_save, sender=User)
def create_user_team(sender, instance, created, **kwargs):
    if created:
        team = Team.objects.create(user=instance)
        team.save()
        initail_code = Code.create(team, [default_code])
        initail_code.save()


@receiver(post_save, sender=User)
def save_user_team(sender, instance, **kwargs):
    instance.team.save()


class Code(models.Model):

    creator = models.ForeignKey(Team, on_delete=models.CASCADE)
    creation_date = models.DateTimeField(auto_now_add=True)
    revision = models.PositiveIntegerField(default=0)
    name = models.CharField(max_length=20)
    warrior1 = models.FileField(upload_to='codes/')
    warrior2 = models.FileField(upload_to='codes/')

    @classmethod
    def create(cls, team, codes):
        if len(codes) > 2:
            raise RuntimeError('Tried to create a Code instance with more than 2 warriors')
        model = cls(creator=team)

        if len(codes) == 1:
            cls._save_file(model.warrior1, team.user.username, 'current', codes[0])
        else:
            cls._save_file(model.warrior1, team.user.username, 'current1', codes[0])
            cls._save_file(model.warrior2, team.user.username, 'current2', codes[1])
        model.save()
        return model

    @staticmethod
    def _save_file(file_field, username, name, content):
        path = [settings.MEDIA_ROOT, 'codes', username]
        filename = os.path.join(username, name + '.s')

        Code._dir_exists(path)
        temp = os.path.join(*path, 'temp.s')

        # TODO: Change this to work with tempfile
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

    def get_code(self, i=None):
        if i:
            return None
        return [read_file(warrior.path) for warrior in [self.warrior1, self.warrior2] if warrior]
    
    def get_paths(self, i=None):
        if i:
            return None
        return [warrior.path for warrior in [self.warrior1, self.warrior2] if warrior]


def read_file(filename):
    with open(filename) as f:
        s = f.read()
    return s


@receiver(models.signals.post_delete, sender=Code)
def delete_code(sender, instance, **kwargs):
    try:
        os.remove(instance.warrior1.path)
        os.remove(instance.warrior2.path)
    except:
        print('The following file/s have already been removed when trying to delete Code object:\n'
              + instance.warrior1.path
              + '\n'
              + instance.warrior2.path if instance.warrior2 else '')


class Result(models.Model):
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE)
    round = models.PositiveSmallIntegerField()
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    score = models.PositiveSmallIntegerField()
    code = models.ForeignKey(Code, on_delete=models.CASCADE)

    @classmethod
    def create(cls, team, tournament, score):
        model = cls()
        model.team = team
        model.round = tournament.current_round
        model.score = score
        model.tournament = tournament
        model.code = team.current_code
        return model

    def delete(self, *args, **kwargs):
        self.code.delete()
        super().delete(*args, **kwargs)

    def __str__(self):
        return f'{self.team.user.username} - {self.round}, Score: {self.score}'
