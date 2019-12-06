from flask import Flask
from flask_cors import CORS
import json
from compare_json_csv import get_all

app = Flask(__name__)
CORS(app)

@app.route("/predictions/<int:uid>", strict_slashes=False)

def predictions(uid):
    return json.dumps(get_all(uid), indent=2)

if __name__ == '__main__':
    app.run(debug=True)
