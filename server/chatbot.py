
class Chatbot:
    def __init__(self):
        self.session = {}

    def nlu(self, user_input):
        intent = 'default'
        if 'hello' in user_input.lower():
            intent = 'greeting'
        elif 'bye' in user_input.lower():
            intent = 'goodbye'
        return intent

    def nlg(self, intent):
        responses = {
            'greeting': 'Hello! How can I assist you?',
            'goodbye': 'Goodbye! Have a great day!'
        }
        return responses.get(intent, "I'm not sure how to respond to that.")

    def process_message(self, user_input):
        intent = self.nlu(user_input)
        response = self.nlg(intent)
        return response

    def chat(self, user_input):
        self.session['user_input'] = user_input

        bot_response = self.process_message(user_input)

        self.session['bot_response'] = bot_response

        return bot_response

chatbot = Chatbot()