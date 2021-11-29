import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DarkTheme from "./darkTheme";
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

let darkState = false;
const palletType = darkState ? "dark" : "light";
const backgroundColor = darkState ? "#0A1928" : "#fff";
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
        paper: backgroundColor
    },
    text:{
        primary: textColor,
    }
}
});

const handleThemeChange = () => {
  darkState = !darkState
  console.log(darkState)
};

ReactDOM.render(
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App handleThemeChange={handleThemeChange} darkState={darkState}/>
    </ThemeProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();