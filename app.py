from flask import Flask
from flask_cors import CORS
import json
from compare_json_csv import get_all

app = Flask(__name__)
CORS(app)

@app.route("/predictions/<int:rand_on>/<int:uid>", strict_slashes=False)
def predictions(uid, rand_on):
    return json.dumps(get_all(uid, rand_on), indent=2)

@app.route("/rating/<int:uid>/<int:iid>/<int:rating>", strict_slashes=False)
def rate_item(uid,iid,rating):
    pass

if __name__ == '__main__':
    app.run(debug=True)
