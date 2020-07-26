async function fetchMovies(otsing) {
    const url = `https://www.omdbapi.com/?s=${otsing}&apikey=${process.env.REACT_APP_MOVIES_API_KEY}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    catch (err) {
        console.error(err)
    }
}

export default fetchMovies 