import React, { useState } from 'react';

function MovieSelector({ onSelect }) {
  const [selectedMovie, setSelectedMovie] = useState('');

  const movies = ['Inception', 'The Matrix', 'Interstellar'];

  const handleChange = (event) => {
    const movie = event.target.value;
    setSelectedMovie(movie);
    onSelect(movie);
  };

  return (
    <div>
      <h3>Select a movie:</h3>
      <select value={selectedMovie} onChange={handleChange}>
        <option value="">--Choose a movie--</option>
        {movies.map((movie) => (
          <option key={movie} value={movie}>
            {movie}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MovieSelector;

import React, { useState } from 'react';
import './App.css';
import RateMovieButton from './RateMovieButton';
import MovieSelector from './MovieSelector';

function App() {
  const [selectedMovie, setSelectedMovie] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Media Toolbar</h1>
        <MovieSelector onSelect={(movie) => setSelectedMovie(movie)} />
        {selectedMovie && <RateMovieButton />}
      </header>
    </div>
  );
}

export default App;
