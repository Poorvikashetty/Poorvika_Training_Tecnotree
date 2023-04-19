import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    const value = e.target.value;
    if (value === 'C') {
      setInput('');
      setResult(0);
    } else if (value === '←') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h1><small>CalEasy</small></h1>
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClick} value="C">C</button>
        <button onClick={handleClick} value="(">(</button>
        <button onClick={handleClick} value=")">)</button>
        <button onClick={handleClick} value="←">←</button>
        <button onClick={handleClick} value="7">7</button>
        <button onClick={handleClick} value="8">8</button>
        <button onClick={handleClick} value="9">9</button>
        <button onClick={handleClick} value="+">+</button>
        <button onClick={handleClick} value="4">4</button>
        <button onClick={handleClick} value="5">5</button>
        <button onClick={handleClick} value="6">6</button>
        <button onClick={handleClick} value="-">-</button>
        <button onClick={handleClick} value="1">1</button>
        <button onClick={handleClick} value="2">2</button>
        <button onClick={handleClick} value="3">3</button>
        <button onClick={handleClick} value="*">*</button>
        <button onClick={handleClick} value="0">0</button>
        <button onClick={handleClick} value=".">.</button>
        <button onClick={handleClick} value="=">=</button>
        <button onClick={handleClick} value="/">/</button>
      </div>
    </div>
  );
}

export default App;
