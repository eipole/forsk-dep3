import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Ul = styled.ul`
 list-style: none;
justify-content: space-evenly;
margin-left: -2.4em;
@media(min-width: 400px) {
    display: flex;
  } 
`


const StyledLink = styled(Link)`
 font-size: 2rem;
transition-duration: 0.4s;
color: #679297;
&:hover{
    color: #0e66c8;
}
 
 
`
function Navigation(){
return(
 <Ul>
    <li><StyledLink to="/">Home</StyledLink></li>
    <li><StyledLink to="/search">Search</StyledLink></li>
    <li><StyledLink to="/display">Movies</StyledLink></li>
</Ul>
 )
}


export default Navigation