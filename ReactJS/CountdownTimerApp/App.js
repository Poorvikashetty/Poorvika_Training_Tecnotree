import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countdown, setCountdown] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdown - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date(e.target.elements.date.value);
    const time = e.target.elements.time.value.split(':');
    date.setHours(time[0], time[1], 0, 0);
    setCountdown(date.getTime());
  };

  return (
    <div className="countdown">
      <h1>Countdown Timer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" required />
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" defaultValue="00:00" required />
        <button type="submit">Start Countdown</button>
      </form>
      <div className="timer">
        <div className="days">{days}</div>
        <div className="hours">{hours}</div>
        <div className="minutes">{minutes}</div>
        <div className="seconds">{seconds}</div>
        <div className="label">Days</div>
        <div className="label">Hours</div>
        <div className="label">Minutes</div>
        <div className="label">Seconds</div>
      </div>
    </div>
  );
}

export default App;
