import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DarkTheme from "./darkTheme";
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import homeBackground from './homeBackground.png';

let loginStatus = false;

const darkState = true;
const palletType = darkState ? "dark" : "light";
const backgroundColor = darkState ? "#0A1928" : "#ededed";
const textColor=!darkState? "#0A1928" : "#fff";
const theme = createTheme({
  palette: {
    mode: palletType,
    primary: {
        main: textColor,
        textColor: textColor
    },
    secondary: {
        main: '#f44336',
    },
    background: {
        default: backgroundColor,
        paper: "#fff"
    },
    text:{
        primary: textColor,
    }
}
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    { loginStatus ? 
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider> : 
      <div styles={{ backgroundImage:`url(${homeBackground})` }}>
        <App />
      </div> }
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
