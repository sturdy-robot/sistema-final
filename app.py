from flask import Flask
import json
from compare_json_csv import get_all

app = Flask(__name__)

@app.route("/predictions/<int:uid>", strict_slashes=False)

def predictions(uid):
    return json.dumps(get_all(uid), indent=2)

if __name__ == '__main__':
    app.run(debug=True)