from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse

from codeguru_app.models import Team, Code
from codeguru_extreme import settings

import os
import json
from unittest import mock


class SubmitCodeTestCase(TestCase):
    username =  'test'
    password = 'secret'

    def setUp(self):
        self.client = Client()

        self.user = User.objects.create_user(
            username=self.username, password='secret')
        self.user.save()

    def tearDown(self):
        codes = Code.objects.all()
        for code in codes:
            code.delete()

    @mock.patch('codeguru_app.models.Code.create', wraps=Code.create)
    def test_submit_single_code(self, create_mock):
        code_name = 'test'
        code_content = 'random content'
        codes = json.dumps([{'name': code_name, 'code': code_content}])

        login = self.client.login(username=self.username, password='secret')

        response = self.client.post(
            reverse('submit'),
            data={'codes': codes}
        )
        self.user.refresh_from_db()

        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(self.user.team.current_code)
        create_mock.assert_called_with(self.username, json.loads(codes))
    
    @mock.patch('codeguru_app.models.Code.create', wraps=Code.create)
    def test_submit_two_codes(self, create_mock):
        code_name = 'test'
        code_content = 'random content'
        codes = json.dumps([{'name': code_name, 'code': code_content}] * 2)

        login = self.client.login(username=self.username, password='secret')

        response = self.client.post(
            reverse('submit'),
            data={'codes': codes}
        )
        self.user.refresh_from_db()

        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(self.user.team.current_code)
        create_mock.assert_called_with(self.username, json.loads(codes))

    @mock.patch('codeguru_app.models.Code.create', wraps=Code.create)
    def test_client_already_has_code(self, create_mock):
        code_name = 'test'
        code_content = 'random content'
        other_content = 'other content'
        codes = json.dumps([{'name': code_name, 'code': code_content}] * 2)

        login = self.client.login(username=self.username, password='secret')
        response = self.client.post(
            reverse('submit'),
            data={'codes': codes}
        )

        codes = json.dumps([{'name': code_name, 'code': other_content}])
        response = self.client.post(
            reverse('submit'),
            data={'codes': codes}
        )
        self.user.refresh_from_db()


        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(self.user.team.current_code)
        create_mock.assert_called_with(self.username, json.loads(codes))


    def test_submit_three_codes(self):
        code_name = 'test1'
        code_content = 'random content'
        codes = json.dumps([{'name': code_name, 'code': code_content}] * 3)

        login = self.client.login(username=self.username, password='secret')

        response = self.client.post(
            reverse('submit'),
            data={'codes': codes}
        )

        self.assertContains(response, 'Error', status_code=409)
        
    
    def test_not_logged_in(self):
        code_name = 'test'
        code_content = 'random content'
        codes = json.dumps([{'name': code_name, 'code': code_content}])

        response = self.client.post(
            reverse('submit'),
            data={'codes': codes}
        )

        self.assertNotEqual(response, 200)


    def test_fail_to_get(self):
        login = self.client.login(username=self.username, password='secret')

        response = self.client.get(reverse('submit'))

        self.assertEqual( response.status_code, 404)
    
def read_file(filename):
    with open(filename) as f:
        s = f.read()
    return s
