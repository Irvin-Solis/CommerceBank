import React, { useGlobal, setGlobal, useState, useEffect } from 'reactn';
import DarkTheme from "./darkTheme";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import NavBar from "./Navbar";

export default function Layout({...props}) {
    const darkTheme = DarkTheme(props.darkState);

    useEffect(() => {
        
    }, [props.darkState]); 

    const themeChange = () => {
        props.handleThemeChange();
        console.log(props);
      }; 

  return (
      <div>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <NavBar 
                    {...props}
                    darkState={props.darkState}
                    themeChange={themeChange}
                />
                <Container style={{ marginTop: "2%", marginBottom: "20%" }}>
                    {props.children}
                </Container>
            </ThemeProvider>
        </StyledEngineProvider>
        
      </div>
  );
}