import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
const Notext = styled("p")`
    text-align: center;
    color: #4a8989;
`
const StyledDib = styled.div`
@media(min-width: 500px){
    background-color: #dededf;
    text-align: center;
}
`
function DisplayMovies({movie}){
const history = useHistory()

    
    if(movie === undefined){
        setTimeout(() => history.push("/search"), 2000);
        return <Notext>Please enter search term </Notext>
    }else{
return movie.map((elem)=> {return (
                <StyledDib key={elem.imdbID} >
                 <h1>{elem.Title}</h1>
                 <img src={elem.Poster} alt="No content" />
                 <hr/>
                 </StyledDib>
                 )})}
}

export default DisplayMovies