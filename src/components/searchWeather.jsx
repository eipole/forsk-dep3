import React, { useEffect } from 'react'
import { useState } from 'react'
import weatherFetch from '../functions/weatherFetch'
import styled from 'styled-components'

const WeatherWord = styled.p`
font-size: ${props=> props.theme.fontSizes.big};
 `
 const WeatherColor = styled.span`
    color:  ${props=>(props.cloud ? props.theme.colors.sinine : props.theme.colors.kollane) };
` 
function SearchWeather(){
    const [ilm, setIlm] = useState("")

useEffect(()=>{ 
weatherFetch(setIlm)
},[])

const cloud =   ilm.includes("clouds") || ilm.includes("cloudy") || ilm.includes("rain")
    return (
        <div>
            <WeatherWord>
            Its {ilm} <WeatherColor cloud={cloud} > today</WeatherColor>, perfect to watch som movies 
            </WeatherWord>
        </div>
    )
}

export default SearchWeather

