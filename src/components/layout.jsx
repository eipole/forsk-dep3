 import React from 'react'
import {Container, Title} from '../styles/generalStyles'
import logo from '../images/back.jpg'
import styled from'styled-components'

const  StyledImage = styled("img")`
width:100%;
height: 200px;
object-fit: cover;
`

const StyledDiv = styled.div`
margin:0;
padding:0;
`

function Layout({children}){
    return(
        <Container >
        <StyledImage src={logo} alt="pilt"/>
        <StyledDiv>
        <Title>React Movie Search</Title>
        </StyledDiv>
        {children}
        </Container >
    )
}

export default Layout

