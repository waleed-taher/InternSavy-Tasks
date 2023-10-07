// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'afd0f7f0afmsh4fb1499b3c8557fp1507dcjsnc227b5a1b03c',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = async (city) => {
  // const URL = "https://open-weather13.p.rapidapi.com/city";
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  //HINT: Use template literals to create a url with input and an API key
  const response  = await fetch(`${FULL_URL}`)
  const weather = await response.json()
  
  return weather
  //CODE GOES HERE
}



const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  
  const weatherInfo = await getWeatherData(city)
  const showWeatherInfo = await showWeatherData(weatherInfo)

  return showWeatherInfo
}


const showWeatherData = async (weatherData) => {
  //CODE GOES HERE
  document.getElementById("city-name").innerText = weatherData.name
  document.getElementById("weather-type").innerText = weatherData.weather[0].main
  document.getElementById("temp").innerText = weatherData.main.temp
  document.getElementById("min-temp").innerText = weatherData.main.temp_min
  document.getElementById("max-temp").innerText = weatherData.main.temp_max
}

