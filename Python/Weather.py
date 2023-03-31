#Weather App: Create a command-line application that allows users to enter a city name and displays the current weather condition using an API like OpenWeatherMap. You can use Python's requests module to make HTTP requests to the API and parse the response data.
import requests

# Define the base URL and API key for the OpenWeatherMap API
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"
API_KEY = "b14be4bf12b5fc22a6c1bb225a587b4d"  # Replace with your own API key

# Ask the user to enter a city name
city = input("Enter a city name: ")

# Define the query parameters for the API request
params = {
    "q": city,
    "units": "metric",  # Use metric units (e.g. Celsius)
    "appid": API_KEY
}

# Make the API request and check the status code
response = requests.get(BASE_URL, params=params)
if response.status_code == 200:
    # Parse the response JSON data
    data = response.json()
    
    # Extract the relevant information from the data
    temperature = data["main"]["temp"]
    weather_desc = data["weather"][0]["description"].capitalize()
    city_name = data["name"]
    
    # Print the weather information
    print(f"The temperature in {city_name} is {temperature:.1f} degrees Celsius.")
    print(f"The weather condition is {weather_desc}.")
else:
    # If the API request failed, print an error message
    print("Sorry, there was an error retrieving the weather information.")
