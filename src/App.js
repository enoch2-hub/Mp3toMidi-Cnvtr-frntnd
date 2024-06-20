// src/App.js
import React from 'react';
import './App.css';

import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>MP3 to MIDI Converter</h1>
          <FileUpload />
        </div>
    </div>
  );
}

export default App;
