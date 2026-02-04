
function getWeatherData(event){
    event.preventDefault()
    const lat = document.getElementById("lat").value
    const lon = document.getElementById("lon").value

    const apiKey = "d741bcd205c09b5ad470819c1e6cf6f0"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    console.log("hello")
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            var dataDiv = document.getElementById("weatherData")
            dataDiv.innerHTML = `<h2> Weather Of: ${data.name}</h2>
                                <p> Temperature: ${data.main.temp - 273.15} degree Celcius</p>
                                <p> Weather: ${data.weather[0].main}</p>`
        })
}

document.getElementById("weatherReport").addEventListener("submit", getWeatherData)