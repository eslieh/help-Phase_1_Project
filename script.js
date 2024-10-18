const weatherDataE1 = document.getElementById(weather-data);

const cityInputE1 = document.getElementById(city-input);

const formE1 = document.querySelector("form");

formE1.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityValue = cityInputE1.value;
    console.log(cityValue);
    getWeatherdata(cityValue);
});

function getWeatherData(cityValue){
    try {
        const reponse = await fetch(`http://localhost:3000/weatherData.jsonq?=${cityValue}$appid=${appkey}&units=metric`)
        if(!Response.ok){
            throw new Error("Network reponse was not ok")
        }
        const data = await reponse.json();
        } catch(error) {}
        const temperatute = Math.round(data.main.temp)
        const description = data.weather[0].description

        const icon = data.weather[0].icon
        const details =[
            `Feels like: ${Math.round(data.main.Feels_like)}`,
            `Humidity: ${data.main.humidity}`,
            `Wind speed ${data.wind.speed }`
        ]
        weatherDataE1.querySelector(".icon").innerHTML = `<img src="images/${icon}.png" alt="Weather Icon">`
}.catch (error) {}
    }
