import json
from recommender_system import get_predictions_flask
import os

THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))

jsonfile = os.path.join(THIS_FOLDER, 'src/assets/data.json')

def get_data_json(json_file):
    dicionario = json.loads(json_file)
    return dicionario

def compare_iid(dicionario, tecnicas):
    recommendations = []
    for line in dicionario:
        for i in range(52):
            x = tecnicas[i]
            if(line[0] == str(x['itemid'])):
                recommendations.append(x)

    return recommendations

def get_all(uid, rand_on):
    json1 = get_data_json(json.dumps(get_predictions_flask(uid, rand_on)))
    with open(jsonfile, 'r') as f:
        json2 = json.load(f)
    recommendations = compare_iid(json1,json2)
    return recommendations
