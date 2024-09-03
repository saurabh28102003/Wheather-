const apiKey = "2cfc92ea3f5b12bc273834f9a8386a2a" // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('getWeatherButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
                    document.getElementById('description').textContent = data.weather[0].description;
                } else {
                    alert('City not found');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Failed to fetch weather data');
            });
    } else {
        alert('Please enter a city');
    }
});
