import React, { Suspense, useRef } from 'react'
import { Container, Grid, Hidden } from "@material-ui/core";
import OMSLogo from "../Images/OMSLogo.webp"; // Ensure this path is correct


export default function Home() {
  
  return (
    <Container className="page-content">
      <Grid container className="landing-container">
            <img src={OMSLogo} style={{height:'300px'}}/>
        </Grid>
    </Container>
  );
}
