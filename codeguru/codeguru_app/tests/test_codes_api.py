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

    admin_creds = {
        'username' : 'admin',
        'email' : 'admin@example.com',
        'password' : 'admin'
    }

    def setUp(self):
        self.client = Client()

        self.user = self.user1 = User.objects.create_user(**self.creds)
        self.user.save()
        self.user2 = User.objects.create_user(**self.creds2)
        self.user2.save()
        self.admin = User.objects.create_superuser(**self.admin_creds)
        self.admin.save()

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

    def test_get_all_current_code(self):
        code1 = 'random_code_content'
        code2 = 'Other CODE content'
        self.user1.team.current_code = Code.create(self.user1.username, [{'name':'name', 'code': code1}])
        self.user1.save()
        self.user2.team.current_code = Code.create(self.user2.username, [{'name':'name', 'code': code2}])
        self.user2.save()
        self.client.login(**self.admin_creds)

        response = self.client.get(
            reverse('username-codes', kwargs={'username':'current'})
        )

        self.assertEqual(response.status_code, 200)
        self.assertListEqual(response.json()['code'], [[code1], [code2]])
    
    def test_get_all_current_code_with_not_everyone_submitted(self):
        code1 = 'random_code'
        self.user1.team.current_code = Code.create(self.user1.username, [{'name':'name', 'code': code1}])
        self.user1.save()
        self.client.login(**self.admin_creds)

        response = self.client.get(
            reverse('username-codes', kwargs={'username':'current'})
        )

        self.assertEqual(response.status_code, 200)
        self.assertListEqual(response.json()['code'], [[code1]])
    
    def test_get_all_current_code_not_superuser(self):
        code1 = 'random_code_content'
        code2 = 'Other CODE content'
        self.user1.team.current_code = Code.create(self.user1.username, [{'name':'name', 'code': code1}])
        self.user1.save()
        self.user2.team.current_code = Code.create(self.user2.username, [{'name':'name', 'code': code2}])
        self.user2.save()
        self.client.login(**self.creds)

        response = self.client.get(
            reverse('username-codes', kwargs={'username':'current'})
        )

        self.assertEqual(response.status_code, 403)
