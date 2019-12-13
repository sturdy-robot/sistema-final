from flask import Flask
from flask_cors import CORS
import json
from socket import gethostname
from compare_json_csv import get_all
from recommender_system import write_rating
from recommender_system import get_rating

app = Flask(__name__)
CORS(app)

@app.route("/predictions/<int:rand_on>/<int:uid>", strict_slashes=False)
def predictions(uid, rand_on):
    return json.dumps(get_all(uid, rand_on), indent=2)

@app.route("/ratings/<int:uid>/<int:iid>", strict_slashes=False)
def rating(uid,iid,rating):
    write_rating(uid,iid,rating)

if __name__ == '__main__':
    app.run(debug=True)

