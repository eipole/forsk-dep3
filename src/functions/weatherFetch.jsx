async function weatherFetch(set){
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=58&lon=7&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`

    try {
        const res = await fetch(url)
        const data = await res.json()
        set(data.list[0].weather[0].description)
    }
    catch (err) {
        console.error(err)
    }
}
export default weatherFetch