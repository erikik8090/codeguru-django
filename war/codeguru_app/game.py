
import os
import subprocess
import collections

from codeguru_extreme import settings

def play():
    for root, dirs, files in os.walk(os.path.join(settings.MEDIA_ROOT, 'codes')):
        for file in files:
            if file.endswith('.s'):
                assemble(root, file[:-2])
                objcopy(root, file[:-2])
    run_engine()
    return parse_results()
    

def assemble(path, filename):
    subprocess.call([
        settings.ASSEMBLER, 
        '-march=rv32ic', 
        '-o', os.path.join(path, filename + '.elf'), 
        os.path.join(path, filename + '.s')
    ])

def objcopy(path, filename):
    subprocess.call(' '.join([
        settings.OBJ_COPY, 
        '-O binary', 
        os.path.join(path, filename + '.elf'), 
        os.path.join(path, filename + '.bin')
    ]))

def run_engine():
    subprocess.call([
        'java',
        '-jar', settings.ENGINE,
        os.path.join(settings.MEDIA_ROOT, 'codes')
    ])

def parse_results():
    results = collections.defaultdict(float)
    with open(os.path.join(settings.BASE_DIR, 'output.txt')) as f:
        for line in f.readlines():
            username, score = line.split(':')
            results[username] += float(score)
    os.remove(os.path.join(settings.BASE_DIR, 'output.txt'))
    return results