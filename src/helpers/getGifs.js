const API_KEY = 'IicIT2m0ZIbjkZjtLotgQuuXuvuPjMza'

export const getGifs = async (category) => {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(category)}&limit=10&&rating=g&lang=en`
    const response = await fetch(endpoint);
    const {data} = await response.json();
    const gifs = data.map(img=> (
        {
            id:img.id,
            title:img.title,
            url: img.images.downsized_medium.url
        }
    ))
    return gifs;
}