from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse

from codeguru_app.models import Team, Code
from codeguru_extreme import settings

import os
import json


class SubmitCodeTestCase(TestCase):

    username1 = 'test'
    password = 'secret'

    def setUp(self):
        self.client = Client()

        self.user = User.objects.create_user(
            username=self.username1, password='secret')
        self.user.save()

    def tearDown(self):
        codes = Code.objects.all()
        for code in codes:
            code.delete()

    def test_pass(self):
        self.assertEqual(1, 1)

    def test_submit_single_code(self):
        code_name = 'test1'
        code_content = 'random content'
        codes = json.dumps([{'name': code_name, 'code': code_content}])

        login = self.client.login(username=self.username1, password='secret')

        response = self.client.post(
            reverse('submit'),
            data={'codes': codes}
        )
        self.user.refresh_from_db()

        self.assertEqual(response.status_code, 200)
        self.assertTrue(os.path.exists(
            os.path.join(settings.MEDIA_ROOT, 'codes', self.username1, code_name)
        ))
        self.assertIsNotNone(self.user.team.current_code)
        self.assertTrue(
            self.user.team.current_code.warrior1.name,
            os.path.join('codes', self.username1, code_name)
        )
        self.assertEqual(
            self.user.team.current_code.warrior1.path,
            os.path.join(settings.MEDIA_ROOT, 'codes', self.username1, code_name)
        )
        self.assertEqual(
            read_file(os.path.join(settings.MEDIA_ROOT, 'codes', self.username1, code_name)),
            code_content
        )

    def test_submit_three_codes(self):
        code_name = 'test1'
        code_content = 'random content'
        codes = json.dumps([{'name': code_name, 'code': code_content}] * 3)

        login = self.client.login(username=self.username1, password='secret')

        response = self.client.post(
            reverse('submit'),
            data={'codes': codes}
        )

        self.assertContains(response, 'Error', status_code=409)
    
def read_file(filename):
    with open(filename) as f:
        s = f.read()
    return s
