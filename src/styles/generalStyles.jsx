import styled from "styled-components";
import pilt from '../images/back.jpg'

export const Button = styled.button`
    margin-top: 1.5em;
    border-radius: 6px;
    background-color: black;
    color: red;
    padding: .2em 2em;
    transition-duration: 0.4s;
    font-size: 1.5rem;
    &:hover,
    :focus{
     background-color: #f5f5f5;
    }
`

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0px, 70%) minmax(1em, 1fr);
  & > *{
    grid-column: 2 / 3;
  }
`
export const Title = styled.h1`
  font-size: 4.4rem;
  text-align: center;
  background-image: url(${pilt});
  background-position: 50% 30%;
`