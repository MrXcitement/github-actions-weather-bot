require('dotenv').config()
const fetch = require('node-fetch')

const weatherToken = process.env.WEATHER_API_TOKEN

const weatherURL = new URL("https://api.openweathermap.org/data/2.5/weather")
weatherURL.searchParams.set('zip', '80127,us')
weatherURL.searchParams.set('APPID', weatherToken)
weatherURL.searchParams.set('units', 'imperial')

const generateWeatherMessage = weatherData =>
   `The weather in ${weatherData.name}: ${weatherData.weather[0].description}. Current temperature is ${weatherData.main.temp} with a low temp of ${weatherData.main.temp_min} and a high temp of ${weatherData.main.temp_max}.`

const getWeatherData = async() => {
    const resp = await fetch(weatherURL.toString())
    const body = await resp.json()
    return body
}

const main = async() => {
    const weatherData = await getWeatherData()
    const weatherMessage = generateWeatherMessage(weatherData)
    console.log(weatherMessage)
}

main()
