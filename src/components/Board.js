import React, { useState } from 'react'
//Components
import Footer from './Footer'
import Search from './Search'
import WeatherView from './WeatherView'
//Hooks
import useGetWeather from '../hooks/useGetWeather'

const Board = () => {

  const [location, setLocation] = useState('')

  const {loading, data} = useGetWeather(location)

  
  const handleSubmit = (loc) => {
    setLocation(loc)
  }

  return (
    <div className='board'>
        <Search onSubmit={handleSubmit}/>
        <WeatherView 
        {...data}
        loading = {loading}
        location = {location}
        />
        <Footer/>
   </div>
  )
}

export default Board