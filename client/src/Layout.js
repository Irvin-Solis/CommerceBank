import React, { useState, Suspense } from "react";
import DarkTheme from "./darkTheme";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import NavBar from "./Navbar";

export default function Layout(props) {
    const [darkState, setDarkState] = useState(true);
    const darkTheme = DarkTheme(darkState);

  return (
      <div>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <NavBar 
                    {...props}
                />
                <Container style={{ marginTop: "2%", marginBottom: "20%" }}>
                    {props.children}
                </Container>
            </ThemeProvider>
        </StyledEngineProvider>
        
      </div>
  );
}