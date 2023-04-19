
const readline = require('readline');

const API_KEY = require('./config').API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get current weather for a location
async function getCurrentWeather(location) {
    const { default: fetch } = await import('node-fetch');
  const url = `${BASE_URL}/weather?q=${location}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Function to get 5-day forecast for a location
async function getForecast(location) {
  const url = `${BASE_URL}/forecast?q=${location}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Function to handle user input and display weather information
async function main() {
  rl.question('Enter a location: ', async (location) => {
    try {
      // Get current weather and forecast for location
      const currentWeather = await getCurrentWeather(location);
      const forecast = await getForecast(location);

      // Display current weather
      console.log(`Current weather for ${location}:`);
      console.log(`  Temperature: ${currentWeather.main.temp}°C`);
      console.log(`  Conditions: ${currentWeather.weather[0].description}`);

      // Display 5-day forecast
      console.log(`\n5-day forecast for ${location}:`);
      forecast.list.forEach((item) => {
        const date = new Date(item.dt_txt);
        console.log(`  ${date.toDateString()}:`);
        console.log(`    Temperature: ${item.main.temp}°C`);
        console.log(`    Conditions: ${item.weather[0].description}`);
      });

    } catch (err) {
      console.error(`Error getting weather data: ${err}`);
    }
    rl.close();
  });
}

main();