'use client'

import { useState } from 'react';

const ChatBox = () => {
  const [currentEmotion, setCurrentEmotion] = useState('');
  const [desiredEmotion, setDesiredEmotion] = useState('');
  const [movies, setMovies] = useState<any>([]);

  const handleRecommend = async () => {
    const response = await fetch(
      `http://172.20.10.6:5000/recommend?current_emotion=${encodeURIComponent(currentEmotion)}&desired_emotion=${encodeURIComponent(desiredEmotion)}&top_k=7`
    );
    const data = await response.json();
    setMovies(data.movies);
  };

  return (
    <div>
      {/* Chat Box */}
      <div className="chat-box-container">
        <div className="chat-box-header">Tell us how you're feeling!</div>
        <input
          type="text"
          placeholder="Current Emotion"
          value={currentEmotion}
          onChange={(e) => setCurrentEmotion(e.target.value)}
          className="chat-box-input"
        />
        <input
          type="text"
          placeholder="Desired Emotion"
          value={desiredEmotion}
          onChange={(e) => setDesiredEmotion(e.target.value)}
          className="chat-box-input"
        />
        <button onClick={handleRecommend} className="chat-box-button">
          Get Recommendations
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
