import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('runnning');

  const toggleParagraphHandler = () => {
    setShowParagraph(prevshowParagraph => !prevshowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is a simple React app.</p>}

      <Button onClick={toggleParagraphHandler}>
        Toggle paragraph
      </Button>
    </div>
  );
}

export default App;
