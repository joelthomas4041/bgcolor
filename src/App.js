import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the current background color
  const [bgColor, setBgColor] = useState('white');

  // Function to change background color
  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, minHeight: '100vh', transition: 'background-color 0.5s' }}>
      <h1>Background Color Changer</h1>
      <div>
        <button onClick={() => changeColor('lightblue')}>Light Blue</button>
        <button onClick={() => changeColor('lightgreen')}>Light Green</button>
        <button onClick={() => changeColor('lightcoral')}>Light Coral</button>
        <button onClick={() => changeColor('lightyellow')}>Light Yellow</button>
        <button onClick={() => changeColor('white')}>Reset to White</button>
      </div>
    </div>
  );
}

export default App;
