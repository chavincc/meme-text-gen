from flask import Flask, request, json, Response
from flask_cors import CORS, cross_origin


import controller.template as template


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
PORT = '5000'


@app.route('/')
@cross_origin()
def base():
    return Response(
        response='api',
        status=200,
        mimetype='application/json'
    )


@app.route('/templates', methods=['GET'])
@cross_origin()
def GET_templates():
    id = request.args.get('id')
    if not id or id == '':
        response = template.get_all_templates()
    else:
        response = template.get_template(int(id))
    return Response(
        response=json.dumps(response),
        status=200,
        mimetype='application/json'
    )


if __name__ == '__main__':
    app.run(debug=True, port=PORT, host='0.0.0.0')