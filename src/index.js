import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import './index.css';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'

const Global = createGlobalStyle`
body{
  font-size: 24px;
}
li {
  list-style: none;
}
a{
	color: inherit;
}
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Global/>
    {/* <ToastContainer autoClose={2000} /> */}
  </BrowserRouter>
);
