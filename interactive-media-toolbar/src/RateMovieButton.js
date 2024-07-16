import React, { useState } from 'react';

function RateMovieButton() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
    setSubmitted(true);
  };

  return (
    <div>
      <h3>Rate this movie:</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleRating(star)}
          style={{ color: rating >= star ? 'gold' : 'grey' }}
        >
          ★
        </button>
      ))}
      {submitted && <p>Thank you for your rating of {rating} stars!</p>}
    </div>
  );
}

export default RateMovieButton;

import React from 'react';
import './App.css';
import RateMovieButton from './RateMovieButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Media Toolbar</h1>
        <RateMovieButton />
      </header>
    </div>
  );
}

export default App;
