from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Stethonotes(Resource):
    def get(self):
        return {'abc': 123}

api.add_resource(Stethonotes, '/')

if __name__ == '__main__':
    app.run(debug=True)
