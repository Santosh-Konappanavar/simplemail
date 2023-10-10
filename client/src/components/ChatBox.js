import React from 'react';
import MessageBubble from './MessageBubble';

const ChatBox = ({ messages }) => {
  return (
    <div className="chat-box">
      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          text={message.text}
          isUser={message.isUser}
          botAvatar={message.botAvatar}
          botAudio={message.botAudio} 
        />
      ))}
    </div>
  );
}

export default ChatBox;
