import json
from recommender_system import get_predictions_flask

new_dict = []
dic = []
"""
def get_data_csv(csv_file):
    dict_list = []

    with open(csv_file, 'r') as f:
        reader = csv.DictReader(f, fieldnames=['uid', 'itemid', 'rating'])
        for line in reader:
            dict_list.append(line)

    # converting the OrderedDict to ordinary dictionary
    new_dict = json.loads(json.dumps(dict_list))

    return new_dict
"""

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
    with open('src/assets/data.json', 'r') as f:
        json2 = json.load(f)
    recommendations = compare_iid(json1,json2)
    return recommendations
