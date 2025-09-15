const apiKey = 'a8fa5d73fa885ae6f0f29d3fc7a11e16'; 
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('search-btn').addEventListener('click', () => {
	const city = document.getElementById('city-input').value;
	if (city) {
		fetchWeatherData(city);
	} else {
		alert('Please enter a city name');
	}
});

function fetchWeatherData(city) {
	const url = `${apiBase}?q=${city}&appid=${apiKey}&units=metric`;
	
	fetch(url)
		.then(response => response.json())
		.then(data => {
			if (data.cod === 200) {
				displayWeatherData(data);
			} else {
				alert('City not found. Please try again.');
			}
		})
		.catch(error => {
			console.error('Error fetching the weather data:', error);
			alert('An error occurred while fetching the weather data.');
		});
}

function displayWeatherData(data) {
	document.getElementById('city-name').textContent = data.name;
	document.getElementById('weather-description').textContent = data.weather[0].description;
	document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
	document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
	document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
