import os
from glob import glob
import base64

filelist = glob(
    os.path.abspath(
    os.path.join(
    os.path.realpath(__file__), '..', 'meme_templates', '*')
))

templates = []
for filepath in filelist:
    with open(filepath, 'rb') as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
    encoded_string = encoded_string
    _, filename = os.path.split(filepath)
    id, label = filename.split('-')
    id = int(id)
    label = '.'.join(label.split('.')[:-1])
    templates.append({
        'label': label,
        'id': id,
        'imageBinary': encoded_string
    })

def get_all_templates():
    return templates

def get_template(id):
    for t in templates:
        if t['id'] == id:
            return t
    return None
