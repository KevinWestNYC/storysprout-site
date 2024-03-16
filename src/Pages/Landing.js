import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import { Container, Grid, Hidden } from "@material-ui/core";
import { OrbitControls } from '@react-three/drei'
import OMSLogoFloating from '../Components/OMSLogoFloating'; // Ensure this is correctly imported

// Your LandingText and LandingTextSmall components remain unchanged

export default function Landing() {
  
  return (
    <Container className="page-content">
      <Grid container className="landing-container">
        <Grid item direction="row" xs={12}>
          <Hidden smUp>
            <Canvas
              id="landing-canvas-small"
              style={{
                height: "90vh",
                width: "90vw",
                cursor: "grab"
              }}
              camera={{ position: [20, 0, 40] }}
            >
              <ambientLight intensity={0} />
              <pointLight position={[0, 0, 0]} intensity={0.7}/>
              <pointLight position={[0, 0, 40]} intensity={0.7}/>
              <Suspense fallback={null}>
                <OMSLogoFloating />
              </Suspense>
            </Canvas>
          </Hidden>
          <Hidden xsDown>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Canvas
                id="landing-canvas"
                style={{
                  height: "100vh",
                  width: "100vw",
                  cursor: "grab"
                }}
                camera={{ position: [10, 10, 50] }}
              >
                <ambientLight intensity={0} />
                <pointLight position={[0, 0, 0]} intensity={0.7}/>
                <pointLight position={[0, 0, 40]} intensity={0.5}/>
                <Suspense fallback={null}>
                  <OMSLogoFloating />
                  <OrbitControls enabled={true} enableZoom={false} enablePan={false}/>
                </Suspense>
              </Canvas>
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
}
