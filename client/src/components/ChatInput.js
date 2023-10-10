import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendClick = () => {
    onSend(inputText);
    setInputText('');
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type a message..."
      />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
}

export default ChatInput;
