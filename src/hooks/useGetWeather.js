import { useEffect, useState } from 'react';
import { getWeather } from '../helpers/getWeather';


const useGetWeather = (location) => {

    const [state, setState] = useState({
        loading: true,
        data: {
            temp: null,
            condition: null,
            condition_icon: null,
            humidity: null,
            wind: null
        }
    })

    useEffect(()=>{
        if (location.length > 0){
            setState({...state, loading:true})
            getWeather(location).then(weather => setState({loading: false, data: weather}))
        }
    },[location])

    return state
}

export default useGetWeather