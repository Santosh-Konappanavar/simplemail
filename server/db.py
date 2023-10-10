from pymongo import MongoClient
from db import db

client = MongoClient('mongodb://localhost:27017/')
db = client['chatbot_database']

def save_session_data(user_id, session_data):
    db.sessions.update_one({'user_id': user_id}, {'$set': session_data}, upsert=True)

def get_session_data(user_id):
    return db.sessions.find_one({'user_id': user_id})
