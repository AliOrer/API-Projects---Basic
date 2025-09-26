const apiKey = "52d4c714c26b23b553aad4a3a9c17077;  //52d4c714c26b23b553aad4a3a9c17077

document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("city").value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById("result").innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      } else {
        document.getElementById("result").innerText = `City not found.`;
      }
    })
    .catch(err => console.error(err));
});