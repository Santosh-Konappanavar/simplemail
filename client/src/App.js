// App.js

import React, { useState } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import ChatInput from './components/ChatInput';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    const response = await axios.post('http://localhost:8000/api/chat', { user_input: text });

    const botResponse = response.data.bot_response;
    const botAvatar = response.data.bot_avatar;
    const botAudio = response.data.bot_audio;

    setMessages([
      ...messages,
      { text, isUser: true },
      { text: botResponse, isUser: false, botAvatar, botAudio },
    ]);
  };

  return (
    <div className="App">
      <div className="chat-container">
        <ChatBox messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;
