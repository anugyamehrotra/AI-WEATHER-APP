// ANUGYA MEHROTRA

const apiKey = [BLANKED]; // Add your OpenWeatherMap API key here
const apiURL = [BLANKED]
const cityInput = document.getElementById("cityINPUT").value;

var weatherInput;

function getWeatherAPI(findWeather) {
    alert("Fetching weather data...");

    // FETCH ELEMENT IDS FROM HTML
    var cityInputElement = document.getElementById("city");
    weatherInput = cityInputElement.value;

    // LOCAL STORAGE SAVE
    localStorage.setItem("cityInputKey", weatherInput);

        if (!cityInput) {
            alert('Please enter a city');
            return;
        }

    const currentWeather = [BLANKED]
    const currentForecast = [BLANKED]

        // FETCH CURRENT WEATHER DATA (HEAVILY dependent on response from API) --> MIXED
        fetch(currentWeather)
            .then(response => response.json) {
            .then(data => {
                displayWeather(data);
                console.log(data);
            
            })
            .then(() => {
                alert("Weather data fetched successfully!");
            })
            .catch(error => {
                alert("Error fetching weather data. Please retry again.");
            }); 
        }


        // FETCHING CURRENT FORECAST DATA (also HEAVILY dependent on response from API)
        fetch(currentForecast)
            .then(response => response.json) {
            .then(data => {
                displayForecast(data);
                console.log(data);
            
            })
            .then(() => {
                alert("Weather data fetched successfully!");
            })
            .catch(error => {
                alert("Error fetching weather data. Please retry again.");
            }); 
        }
}

function displayWeather(data){ // Data param. --> get element id by HTML side (confirm if this is correct by seeing if your id's on your divs are same)
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');


    if (data.cod === '404') {
        alert('City not found. Please enter a valid city name.');
        return;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15); // CELCIUS CONV
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
    }
    
}

function displayHourlyForecast(hourlyData){
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    const 
}

// References:
// https://openweathermap.org/current#current
// https://www.youtube.com/watch?app=desktop&v=74IOjtVvExY
// https://github.com/devression/WeatherApplication/tree/main

// https://codepen.io/tutsplus/pen/gObLaEP
// https://www.youtube.com/watch?v=ZPG2wGNj6J4
