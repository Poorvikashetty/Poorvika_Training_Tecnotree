import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);

  useEffect(() => {
    const programmingLanguages = [      'JavaScript', 'Python', 'Java', 'C++', 'PHP', 'Ruby',      'Go', 'Swift', 'Rust', 'Kotlin', 'TypeScript', 'Scala'    ];

    const cards = programmingLanguages
      .concat(programmingLanguages)
      .sort(() => Math.random() - 0.5);

    setCards(cards);
  }, []);

  useEffect(() => {
    const firstCard = cards[flipped[0]];
    const secondCard = cards[flipped[1]];

    if (flipped.length === 2 && firstCard === secondCard) {
      setSolved([...solved, firstCard]);
      setFlipped([]);
    } else if (flipped.length === 2) {
      setTimeout(() => setFlipped([]), 1000);
    }
  }, [flipped]);

  const handleClick = (index) => {
    if (flipped.length < 2 && !flipped.includes(index) && !solved.includes(cards[index])) {
      setFlipped([...flipped, index]);
    }
  };

  const renderCard = (index) => {
    const isFlipped = flipped.includes(index);
    const isSolved = solved.includes(cards[index]);

    return (
      <div className={`card ${isFlipped ? 'flipped' : ''} ${isSolved ? 'solved' : ''}`} onClick={() => handleClick(index)}>
        <div className="front">?</div>
        <div className="back">{cards[index]}</div>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="card-container">
        {cards.map((_, index) => renderCard(index))}
      </div>
      <footer>Created by Ankitha Teja Sharma &copy;</footer>
    </div>
  );
}

export default App;
