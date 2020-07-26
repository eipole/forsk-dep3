import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import GlobalStyles from './styles/globalstyles'


ReactDOM.render(
  <BrowserRouter>
    <>
    <App />
    <GlobalStyles/>
    </>
  </BrowserRouter>,
  document.getElementById('root')
);


