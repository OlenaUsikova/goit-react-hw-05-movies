import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

const Global = createGlobalStyle`
body{
  font-size: 24px;
}
/* li {
  list-style: none;
} */
a{
	color: inherit;
}
h1{font-size: 30px; }
h2{font-size: 24px; }
h3{font-size: 20px; }
h4{font-size: 16px; }
p{font-size: 16px; }
`
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='goit-react-hw-05-movies'>
    <App />
    <Global/>
  </BrowserRouter>
);
