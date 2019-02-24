from setuptools import setup, find_packages
from os import path

here = path.abspath(path.dirname(__file__))

# Get the long description from the README file
with open(path.join(here, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

with open(path.join(here, 'requirements.txt'), encoding='utf-8') as f:
    requirements = f.read().splitlines()

setup(
    name='codeguru',
    version='0.0.1',
    description='CodeGuru competition server',
    long_description=long_description,
    long_description_content_type='text/markdown',
    url='https://github.com/pypa/sampleproject',
    classifiers=[  # Optional
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
    ],
    keywords='django server game competition',
    packages=find_packages(exclude=['contrib', 'docs', 'tests']),
    install_requires=requirements,
    python_requires='!=2.*, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*, <4',
    extras_require={
        'dev': [],
        'test': [],
    },
    package_data={},
    project_urls={  # Optional
        'Bug Reports': 'https://github.com/erikik8090/codeguru-django/issues',
        'Source': 'https://github.com/erikik8090/codeguru-django'
    }
)
