import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Navigation from '../components/navi'
import SearchWeather from '../components/searchWeather'

const See = styled.h1`
margin-bottom: 1em;
font-size: 2rem;
text-align: center;
color: #1c3858;
`

function HomePage(){
    return (
    <div>
        <Layout>
            <Navigation />
            <See>Home Page</See>
            <SearchWeather />
        </Layout>
    </div>
        )
}

export default HomePage