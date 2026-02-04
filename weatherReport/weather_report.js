
function showweatherDetails(event){
    event.preventDefault()

    const city = document.getElementById("city").value
    
    const apiKey = "d741bcd205c09b5ad470819c1e6cf6f0"
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  

    fetch(apiUrl)
        .then((response) => {return response.json()})    //response.json() again returns a promise
        .then((data) => {
            console.log(data)
            const weatherInfo = document.getElementById("weatherInfo")
            weatherInfo.innerHTML = `<h2> Weather in ${data.name}</h2>
                                    <p> Temperature: ${data.main.temp - 273.15} &#8451;</p>
                                    <p> Weather: ${data.weather[0].description}</p>`
        })
        .catch((error) => {
            console.error("error fetching weather: ", error)
            const weatherInfo = document.getElementById("weatherInfo")
            weatherInfo.innerHTML = `<p> Failed to fetch weather. try again.</p>`
        })

}

document.getElementById("weatherForm").addEventListener("submit", showweatherDetails) //by default events are passed