import React from 'react'

/*
data: {
  temp: null,
  condition: null,
  condition_icon: null,
  humidity: null,
  wind: null
}
*/

const WeatherView = ({  temp,condition,condition_icon,humidity,wind,location, loading}) => {
  const loc = location.charAt(0).toUpperCase()+location.substring(1)
  return (
    <>
    {
      !loading ? (
      <div className='weather-view animate__animated animate__bounce'>
        <h2 id='location-title'>Weather in {loc}</h2>
        <h1 id='temp'>{temp}<sup>o</sup>C</h1>
        <div className='condition-section'>

          <img src={condition_icon} alt={`Ico for ${condition}`}></img>
          <p>{condition}</p>
        </div>

        <p id='humidity'>Humidity: {humidity}%</p>
        <p id='wind'>Wind speed: {wind} km/h</p>
      </div>
      ):
      <div style={{height: 100}}></div>
    }
     </>
  )
}

export default WeatherView