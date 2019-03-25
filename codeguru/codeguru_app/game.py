
import os
import subprocess
import collections

from codeguru_extreme import settings

def play(warriors):
    for paths in warriors:
        for warrior_path in paths:
            path, name = os.path.split(warrior_path)
            assemble(path, name[:-2])
            objcopy(path, name[:-2])
    run_engine()
    for paths in warriors:
        for warrior_path in paths:
            path, name = os.path.split(warrior_path)
            os.remove(os.path.join(path, name[:-2] + '.elf'))
            os.remove(os.path.join(path, name[:-2] + '.bin'))
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

def get_registerd_features():
    output = subprocess.check_output([
        'java',
        '-jar', settings.ENGINE,
        '--list-features'
    ])
    return [s.strip() for s in output.decode('ascii').strip().split('\n')]