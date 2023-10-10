import React from 'react';
import './MessageBubble.css';

const MessageBubble = ({ text, isUser, botAvatar, botAudio }) => {
  return (
    <div className={`message-bubble ${isUser ? 'user' : 'bot'}`}>
      {isUser ? (
        text
      ) : (
        <>
          <div className="avatar">
            <img src={botAvatar} alt="Bot Avatar" />
          </div>
          <div className="text">{text}</div>
          {botAudio && (
            <audio controls>
              <source src={botAudio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </>
      )}
    </div>
  );
};

export default MessageBubble;
