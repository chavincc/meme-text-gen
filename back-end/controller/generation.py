import os
from .template import get_template
import torch
from transformers import GPT2LMHeadModel,  GPT2Tokenizer

output_dir = os.path.abspath(
        os.path.join(
        os.path.realpath(__file__), '..', 'model_weights'
    ))
model = GPT2LMHeadModel.from_pretrained(output_dir)
tokenizer = GPT2Tokenizer.from_pretrained(output_dir)
model = model.cuda()

def generate_meme(seed, id):
    model.eval()
    prompt = f"<|startoftext|> [{get_template(int(id))['label']}] {seed}"

    generated = torch.tensor(tokenizer.encode(prompt)).unsqueeze(0)
    generated = generated.cuda()

    sample_outputs = model.generate(
                                    generated, 
                                    #bos_token_id=random.randint(1,30000),
                                    do_sample=True,   
                                    top_k=50, 
                                    max_length = 300,
                                    top_p=0.95, 
                                    num_return_sequences=1
                                    )

    return tokenizer.decode(sample_outputs[0][2:-1], skip_special_tokens=False)