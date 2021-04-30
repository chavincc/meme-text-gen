import random

def generate_meme(seed, id):
    # id: integer = meme id
    mock = [
        f'{seed} nicky nachat <SEP> nicky napat',
        f'{seed} my mom when I word another word ok cool <SEP> nicky when i the cat lmao',
        f'{seed} Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ratione blanditiis nisi voluptas deserunt? Ut? <SEP> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sapiente.'
    ]
    return random.choice(mock)