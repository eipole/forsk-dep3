import React from 'react'
import fetchMovies from '../functions/fetchMovies'
import {useHistory} from 'react-router-dom'
import {Button} from '../styles/generalStyles'
import styled from 'styled-components'

const OtsingDiv = styled("form")`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledInput=styled("input")`
    padding: 1em 0;
`

function SearchMovies({ searchText, setSearchText, setMovie }) {
    const history = useHistory()

    function handleChange(event) {
    const str =event.target.value
        setSearchText(str)
    }



 async function handleSubmit(event) {
        event.preventDefault()
        const arr = await fetchMovies(searchText)
        setMovie(arr.Search)
        /* setTimeout(() =>  */history.push("/display")/* , 0); */
    }

    return (
        <>
            <OtsingDiv className="form" onSubmit={handleSubmit }>
                <label htmlFor="query" className="label" >
                    <StyledInput
                        value={searchText}
                        onChange={handleChange}
                        name="query"
                        type="text"
                        placeholder="tekst"
                    />
                </label>
                <Button type="submit">Search</Button>
            </OtsingDiv>
         </>
    )
}



export default SearchMovies
