from django.test import TestCase, Client
from django.urls import reverse

from ..models import User, Team, Tournament, Result, Code

import json


class CodesViewTest(TestCase):
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
    
    def test_get_current_code(self):
        code_content = 'random content'
        codes = json.dumps([{'name': 'name', 'code': code_content}] * 2)
        self.client.login(**self.creds)
        self.client.post(
            reverse('submit'),
            data={'codes': codes}
        )

        response = self.client.get(
            reverse('specific-code', kwargs={'username':self.user.username, 'version':'current'})
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['code'], [code_content] * 2)


