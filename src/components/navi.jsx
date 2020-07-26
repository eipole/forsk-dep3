import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Ul = styled.ul`
display: flex;
list-style: none;
justify-content: space-evenly;
margin-left: -2.4em; 
`


const StyledLink = styled(Link)`
background-color: #f5f5f5;
font-size: 2rem;
transition-duration: 0.4s;
color: #679297;
&:hover{
    color: #0e66c8;
}
`
function Navigation(){
return(
<>

<Ul>
    <li><StyledLink to="/">Home</StyledLink></li>
    <li><StyledLink to="/search">Search</StyledLink></li>
    <li><StyledLink to="/display">Movies</StyledLink></li>
</Ul>
</>
)
}


export default Navigation