const API_KEY = ''

const place = ''
const lat_lang_endpoint =`http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${API_KEY}`

const url_icon = ''
const icon_endpoint = `http://openweathermap.org/img/wn/${url_icon}@2x.png`

const lat = ''
const lon = ''

const weather_endpoint =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
const forecast_hourly_endpoint =`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${API_KEY}`