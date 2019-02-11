from django.test import TestCase

import os

from ..models import Code, User
from codeguru_extreme import settings

class CodeModelTestCase(TestCase):

    username = 'test'

    def setUp(self):
        self.user = User.objects.create_user(
            username=self.username, password='secret')
        self.user.save()

    def tearDown(self):
        codes = Code.objects.all()
        for code in codes:
            code.delete()

    def test_create_single_code(self):
        code_content = 'very cool code'

        code = Code.create(self.username, [{'code': code_content}])
        code.save()

        self.assertPathsEqual(code.warrior1.name, os.path.join('codes', self.username ,'current.s'))
        self.assertPathsEqual(code.warrior1.path, os.path.join(settings.MEDIA_ROOT, 'codes', self.username, 'current.s'))
        self.assertFalse(code.warrior2)
        self.assertEqual(read_file(code.warrior1.path), code_content)
    
    def test_create_two_codes(self):
        code_content1 = 'very cool code'
        code_content2 = 'cooler code'

        code = Code.create(self.username, [{'code': code_content1}, {'code': code_content2}])
        code.save()

        self.assertPathsEqual(code.warrior1.name, os.path.join('codes', self.username ,'current1.s'))
        self.assertPathsEqual(code.warrior1.path, os.path.join(settings.MEDIA_ROOT, 'codes', self.username, 'current1.s'))
        self.assertPathsEqual(code.warrior2.name, os.path.join('codes', self.username ,'current2.s'))
        self.assertPathsEqual(code.warrior2.path, os.path.join(settings.MEDIA_ROOT, 'codes', self.username, 'current2.s'))
        self.assertEqual(read_file(code.warrior1.path), code_content1)
        self.assertEqual(read_file(code.warrior2.path), code_content2)


    def test_create_three_codes(self):
        code_content = 'content'

        self.assertRaises(RuntimeError, Code.create, self.username, [{'code': code_content}, {'code': code_content}, {'code': code_content}])
    
    def test_copy_one_code(self):
        code_content = 'very cool code'
        code = Code.create(self.username, [{'code': code_content}])
        code.save()

        new_code = Code.create_from_code(code, self.username, 'new_code')
        new_code.save()

        self.assertPathsEqual(new_code.warrior1.name, os.path.join('codes', self.username ,'new_code.s'))
        self.assertPathsEqual(new_code.warrior1.path, os.path.join(settings.MEDIA_ROOT, 'codes', self.username, 'new_code.s'))
        self.assertFalse(new_code.warrior2)
        self.assertEqual(read_file(new_code.warrior1.path), code_content)
    
    def test_copy_two_codes(self):
        code_content1 = 'very cool code'
        code_content2 = 'cooler code'
        code = Code.create(self.username, [{'code': code_content1}, {'code': code_content2}])
        code.save()

        new_code = Code.create_from_code(code, self.username, 'new_code')
        new_code.save()

        self.assertPathsEqual(new_code.warrior1.name, os.path.join('codes', self.username ,'new_code1.s'))
        self.assertPathsEqual(new_code.warrior1.path, os.path.join(settings.MEDIA_ROOT, 'codes', self.username, 'new_code1.s'))
        self.assertPathsEqual(new_code.warrior2.name, os.path.join('codes', self.username ,'new_code2.s'))
        self.assertPathsEqual(new_code.warrior2.path, os.path.join(settings.MEDIA_ROOT, 'codes', self.username, 'new_code2.s'))
        self.assertEqual(read_file(new_code.warrior1.path), code_content1)
        self.assertEqual(read_file(new_code.warrior2.path), code_content2)



    def assertPathsEqual(self, path1, path2):
        self.assertEqual(os.path.normpath(path1), 
                         os.path.normpath(path2),
                         f'{os.path.normpath(path1)} != {os.path.normpath(path2)}')

    
def read_file(filename):
    with open(filename) as f:
        s = f.read()
    return s




