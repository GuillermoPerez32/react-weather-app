import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'

const useFetchGif = (category) => {

    const [state, setState] = useState({
        images: [],
        loading: true
    })

    useEffect(()=>{
        getGifs(category).then(gifs => setState({loading: false, images: gifs}))
    },[category])

    return state

}

export default useFetchGif