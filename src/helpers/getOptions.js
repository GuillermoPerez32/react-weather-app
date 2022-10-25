import axios from "axios";
import { API_KEY, search_endpoint } from "../constants";

export const getOptions = async (location) => {
    //TODO: Fix
    const {data} = await axios.get(search_endpoint, {
        params:
        {
            q: encodeURI(location),
            key:API_KEY,
        },
    })
    console.log(data);
    const options = []
    data.forEach( ({ name, region, country}) => {
        const properties = [name, region, country]
        console.log(properties);
        properties.forEach(property => {
            const propertyLower=property.toLowerCase()
            const locationLower = location.toLowerCase()
            console.log(`${locationLower} ${locationLower.includes(propertyLower)? '' : 'not'} contains ${propertyLower}`);
            if (
                // locationLower.includes(propertyLower)
            //  && 
             !options.includes(property)
             ) {
                options.push(property)
            };
        })
    });
    console.log(options);
    return options;
}