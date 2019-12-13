"""
Main file for the recommender system
"""

from surprise import SVD
from surprise import Dataset
from surprise import Reader
from surprise.model_selection import cross_validate
from collections import defaultdict
import random
import csv
import numpy as np

dataset = 'src/assets/userdata_5_10.csv'

def get_top_n(predictions, n=10):
    """
    Gets top n predictions
    :param predictions: trained predictions from algorithms
    :param n: number of items to be displayed
    :return:
    """
    top_n = defaultdict(list)
    for uid, iid, true_r, est, _ in predictions:
        top_n[uid].append((iid, est))

    for uid, user_ratings in top_n.items():
        user_ratings.sort(key=lambda x: x[1], reverse=True)
        top_n[uid] = user_ratings[:n]

    return top_n


def get_predictions():
    """
    Get all the predictions and print it on screen
    :return:
    """
    reader = Reader(line_format='user item rating', sep=',', rating_scale=(1, 5))
    data = Dataset.load_from_file(dataset, reader=reader)
    trainset = data.build_full_trainset()
    algo = SVD()
    algo.fit(trainset)

    testset = trainset.build_anti_testset()
    predictions = algo.test(testset)

    cross_validate(algo, data, measures=['RMSE', 'MAE'], cv=5, verbose=False)

    top_n = get_top_n(predictions, n=10)

    return top_n

def get_predictions_flask(userid, rand_on):
    """
    Get all the predictions and give it to flask
    :return:
    """
    if rand_on == 1: # Ativar ou desativar a aleatoriedade
        my_seed = 0
        random.seed(my_seed)
        np.random.seed(my_seed)

    recommendations = get_predictions()
    for users in recommendations.items():
        if users[0] == str(userid):
            return (users[1])


def get_recommended_rating(userid, itemid):

    pass

def write_rating(userid, itemid, rating):
    with open(dataset, 'a') as fd:
        fd.write(userid, itemid, rating)
