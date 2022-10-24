import axios from "axios"

const API_KEY = 'cecc5e2ef30443eb9e9145214222310'
const endpoint =`https://api.weatherapi.com/v1/current.json`

export const getWeather = async (location) => {
    const {data} = await axios.get(endpoint, {
        params:
        {
            q: encodeURI(location),
            key:API_KEY,
            aqi: 'no'
        }
    })
    const weather = {
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        condition_icon: data.current.condition.icon,
        humidity: data.current.humidity,
        wind: data.current.wind_kph
    }
    return weather;
}