from django.test import TestCase, Client
from unittest import SkipTest
from django.urls import reverse

from ..models import User, Team, Tournament, Result, Code


class ScoresViewTest(TestCase):
    creds = creds1 = {
        'username' :  'scores1',
        'password' : 'secret'
    }

    creds2 = {
        'username' : 'scores2',
        'password' : 'secret2'
    }

    def setUp(self):
        self.client = Client()

        self.user = self.user1 = User.objects.create_user(**self.creds)
        self.user.save()
        self.user2 = User.objects.create_user(**self.creds2)
        self.user2.save()

        self.tournament = Tournament.objects.create()
        self.tournament.save()
    

    @SkipTest
    def test_no_scores(self):
        self.client.login(**self.creds)

        response = self.client.get(
            reverse('scores')
        )

        self.assertContains(response, 'No scores yet')
    
    def test_one_score(self):
        self.client.login(**self.creds)
        Code.create(self.user.team, ['asdf']).save()
        result = Result.create(self.user.team, self.tournament, 15)
        result.save()
        self.tournament.rounds += 1
        self.tournament.save()

        response = self.client.get(
            reverse('scores')
        )

        self.assertContains(response, self.user.username)
        self.assertContains(response, 'Round 1')
        self.assertContains(response, '15')
    
    def test_two_users(self):
        self.client.login(**self.creds)
        Code.create(self.user.team, ['asdf']).save()
        Code.create(self.user2.team, ['asdf']).save()
        result = Result.create(self.user.team, self.tournament, 15)
        result.save()
        result2 = Result.create(self.user2.team, self.tournament, 32)
        result2.save()
        self.tournament.rounds += 1
        self.tournament.save()

        response = self.client.get(
            reverse('scores')
        )
        
        self.assertContains(response, 'Round 1')
        self.assertContains(response, self.user.username)
        self.assertContains(response, '15')
        self.assertContains(response, self.user2.username)
        self.assertContains(response, '32')
    
    def test_two_rounds(self):
        self.client.login(**self.creds)
        Code.create(self.user.team, ['asdf']).save()
        result = Result.create(self.user.team, self.tournament, 15)
        result.save()
        self.tournament.rounds += 1
        self.tournament.save()
        result2 = Result.create(self.user.team, self.tournament, 36)
        result2.save()
        self.tournament.rounds += 1
        self.tournament.save()

        response = self.client.get(
            reverse('scores')
        )

        self.assertContains(response, 'Round 1')
        self.assertContains(response, self.user.username)
        self.assertContains(response, '15')
        self.assertNotContains(response, self.user2.username)
        self.assertContains(response, 'Round 2')
        self.assertContains(response, '36')

    def test_multiple_rounds_with_multiple_users(self):
        self.client.login(**self.creds)
        Code.create(self.user.team, ['asdf']).save()
        Code.create(self.user2.team, ['asdf']).save()
        result = Result.create(self.user.team, self.tournament, 15)
        result.save()
        result2 = Result.create(self.user2.team, self.tournament, 32)
        result2.save()
        self.tournament.rounds += 1
        self.tournament.save()
        result3 = Result.create(self.user.team, self.tournament, 36)
        result3.save()
        result4 = Result.create(self.user2.team, self.tournament, 16)
        result4.save()
        self.tournament.rounds += 1
        self.tournament.save()

        response = self.client.get(
            reverse('scores')
        )
        
        self.assertContains(response, 'Round 1')
        self.assertContains(response, self.user.username)
        self.assertContains(response, '15')
        self.assertContains(response, self.user2.username)
        self.assertContains(response, '32')
        self.assertContains(response, 'Round 2')
        self.assertContains(response, '36')
        self.assertContains(response, '16')


    def test_not_logged_in(self):
        Code.create(self.user.team, ['asdf']).save()
        result = Result.create(self.user.team, self.tournament, 15)
        result.save()
        self.tournament.rounds += 1
        self.tournament.save()

        response = self.client.get(
            reverse('scores')
        )

        self.assertNotEqual(response.status_code, 200)
