import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

  
  * {box-sizing: border-box;}
  
/* 1rem = 16px default in browser */

  body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.6;
    background-color:#e6e5d8;

/*     display: flex;
    justify-content: center; */
  }
  @media (min-width:600px){
    body{
      background-color: rgb(244,244,244);
    }
}
`

export default GlobalStyle
