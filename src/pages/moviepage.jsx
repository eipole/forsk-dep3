import React from 'react'
import Layout from '../components/layout'
import DisplayMovies from '../components/displayMovies'
import Navigation from '../components/navi'

function MoviePage({movie}){


    return (
    <div>
        <Layout>
            <Navigation />
            <h1 style={{color:"#a5bce7", textAlign: "center"}} >Movie Page</h1>
            <DisplayMovies movie={movie} />
        </Layout>
    </div>
    )
}

export default MoviePage