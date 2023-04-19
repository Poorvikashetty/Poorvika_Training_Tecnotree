import React, { useState, useEffect } from 'react';
import './App.css';

import sunny from './images/sunny.gif';
import cloudy from './images/cloudy.gif';
import snowy from './images/snowy.gif';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (location) {
      // Fetch weather data from API for selected location
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0dcbe73653a2acbd21b1990c55a1f3fb`)
        .then(response => response.json())
        .then(data => setWeatherData(data));
    }
  }, [location]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(event.target.elements.location.value);
  }

  if (!weatherData) {
    return (
      <div>
        <h1><span id="r">Rain</span> Or <span id="s">Shine</span></h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter location:
            <input type="text" name="location" />
          </label><br/>
          <button type="submit">Get weather</button>
        </form>
      </div>
    );
  }

  const temperature = Math.round(weatherData.main.temp - 273.15);
  const condition = weatherData.weather[0].main;

  let backgroundImage = '';
  let icon = '';

  if (temperature > 20) {
    backgroundImage = `url(${sunny})`;
    icon = '☀️';
  } else if (temperature > 10) {
    backgroundImage = `url(${cloudy})`;
    icon = '⛅';
  } else if(temperature<10) {
    backgroundImage = `url(${snowy})`;
    icon = '❄️';
  }

  const styles = {
    backgroundImage: backgroundImage,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'black',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '5rem'
  };

  return (
    <div style={styles}>
      <div>
        <div>{icon} {temperature}°C</div>
        <div>{condition}</div>
      </div>
    </div>
  );
}

export default App;
