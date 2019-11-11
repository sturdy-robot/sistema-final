"""
This algorithm generates random data for testing purposes
"""
import csv
import random
import math

def generate_rating():
    """
    This function uses a gaussian distribution with mean = 3 and sigma = 1
    to generate the ratings for this dataset. It approximates the decimals using
    a floor function, and a hardcoded condition to ensure it will never
    produce numbers above the [1,5] interval
    :return:
    """
    rating = math.floor(random.gauss(3, 1))
    if rating <= 0:
        rating = 1
    elif rating > 5:
        rating = 5

    return rating

def generate_data(nusers,x):
    """
    This function will generate the data of user ratings in a csv file.
    It generates about the nusers*x ratings, just to get a very good amount of data to work with

    :param nusers: number of users that will be used to generate rating data
    :return: dict with following keys:
                {
                    userid:uid,
                    itemid:itemid,
                    rating:r
                }
    """
    listofdictstuple = []
    listofdicts = []
    i = 0

    while i < nusers*x:
        # Guarantees the generation of results for almost every user
        uid = random.randint(0, nusers)
        itemid = random.randint(0, 51)
        rating = generate_rating()
        tuple = (uid, itemid)
        ratings = {"tuple": tuple,
                    "rating": rating
                   }

        if not (any(d['tuple'] == tuple for d in listofdictstuple)):
            #Double check to not allow a second rating from the same user
            listofdictstuple.append(ratings)
            i += 1

    #Generating file name
    userdata = 'userdata_' + str(x) + "_" + str(nusers) + '.csv'
    for items in listofdictstuple:
        tuple = items.get('tuple')
        listofdicts.append({'uid':tuple[0],
                            'itemid':tuple[1],
                            'rating':items.get('rating')})

    k = listofdicts[0].keys()

    with open(userdata, 'w+') as fp:
        writer = csv.DictWriter(fp, k)
        writer.writerows(listofdicts)

generate_data(10,10)
generate_data(100,10)
generate_data(1000,10)