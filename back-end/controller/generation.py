import random

def generate_meme(id):
    # id: integer = meme id
    mock = [
        'nicky nachat <SEP> nicky napat',
        'chutchatut <SEP> chutchatusk',
        'ty <SEP> react god'
    ]
    return random.choice(mock)