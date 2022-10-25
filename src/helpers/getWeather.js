import axios from "axios"
import { API_KEY, weather_endpoint } from "../constants";


export const getWeather = async (location) => {
    const {data} = await axios.get(weather_endpoint, {
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