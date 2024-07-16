//U35549532

import React, { useState } from 'react';

function UploadButton() {
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      alert('Image uploaded successfully!');
      setUploading(false);
    }, 2000); // Simulate upload delay
  };

  return (
    <button onClick={handleUpload} disabled={uploading}>
      {uploading ? 'Uploading...' : 'Upload Image'}
    </button>
  );
}

export default UploadButton;

import React from 'react';
import './App.css';
import RateMovieButton from './RateMovieButton';
import MovieSelector from './MovieSelector';
import UploadButton from './UploadButton';

function App() {
  const [selectedMovie, setSelectedMovie] = React.useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Media Toolbar</h1>
        <MovieSelector onSelect={(movie) => setSelectedMovie(movie)} />
        {selectedMovie && <RateMovieButton />}
        <UploadButton />
      </header>
    </div>
  );
}

export default App;
