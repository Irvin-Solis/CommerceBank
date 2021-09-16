import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import NavBar from "./Navbar";
export default function Layout(props) {

  return (
      <div>
            <CssBaseline />
            <NavBar 
                {...props}
            />
            <Container>
                {props.children}
            </Container>
      </div>
  );
}