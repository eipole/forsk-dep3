import React, {useState} from 'react'
import Layout from '../components/layout'
import SearchMovies from '../components/searchMovies'
import Navigation from '../components/navi'
import styled from 'styled-components'
 
const StyledPara=styled("span")`
    text-align: center;
    h3{
        padding-top: 3em;

    }
`
 
const EnterSearch = styled("h4")`
    text-align: center;
    color: red;
`

function SearchPage({setMovie, movie}){
    const [searchText, setSearchText] = useState("")

    function NoText(){
        return <EnterSearch>Enter search</EnterSearch>
    } 

    return (
    <div>
        <Layout>
            <Navigation />
             <StyledPara>{searchText.length === 0 ? <h3>Find movies</h3> : null}</StyledPara>
            {!movie ? <NoText /> : null}
            <SearchMovies setSearchText={setSearchText} searchText={searchText} setMovie={setMovie}/>
        </Layout>
    </div>
    )
}

export default SearchPage