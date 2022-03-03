import React, { useState } from 'react';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is a simple React app.</p>}
    </div>
  );
}

export default App;
