# app.py

from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from chatbot import Chatbot

app = Flask(__name__)
CORS(app)

app.config['MONGO_URI'] = 'mongodb://localhost:27017/chatbot_database'
mongo = PyMongo(app)

chatbot = Chatbot()

@app.route('/api/chat', methods=['POST'])
def chat():
    if request.method == 'POST':
        data = request.get_json()
        user_input = data['user_input']
        bot_response = chatbot.chat(user_input)
        bot_avatar = '<path_to_bot_avatar>'
        bot_audio = '<path_to_bot_audio>'
        save_session_data(user_id='<some_user_id>', session_data={'user_input': user_input})
        return jsonify({'bot_response': bot_response, 'bot_avatar': bot_avatar, 'bot_audio': bot_audio})
    else:
        return jsonify({'message': 'Hello from the Chat API!'})

def save_session_data(user_id, session_data):
    mongo.db.sessions.update_one({'user_id': user_id}, {'$set': session_data}, upsert=True)

def get_session_data(user_id):
    return mongo.db.sessions.find_one({'user_id': user_id})

if __name__ == '__main__':
    app.run(debug=True, port=8000)
