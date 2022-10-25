import { useEffect, useState } from 'react';
import { getOptions } from '../helpers/getOptions';


const useGetOptions = (location) => {

    const [state, setState] = useState({
        loading: true,
        data: []
    })

    useEffect(()=>{
        if (location.length > 0){
            setState({...state, loading:true})
            getOptions(location).then(locations => setState({loading: false, data: locations}))
        }
        return () => {
            
          }
    },[location])

    return state
}

export default useGetOptions