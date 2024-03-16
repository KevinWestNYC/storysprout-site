import React from "react";
import ProjectCarousel from "../Components/ProjectCarousel";
import { Container, Grid, Hidden } from "@material-ui/core";
import Box from "../Components/Box";
import { OrbitControls } from '@react-three/drei'
import CoolShape from "../Components/CoolShape";
import { Canvas, useFrame } from "@react-three/fiber";



export default function Projects() {
  return (
    <Container className="page-content" >
      <h1 className="page-title">PROJECTS</h1>
      <Grid container direction="row" justifyContent="center">
      <Grid direction="column" xs={12}md={4}>
        <Hidden smDown>
        <Canvas >
          <ambientLight intensity={.4}/>
          <pointLight position={[10, 10, 10]}/>
          <pointLight position={[0, 0, 40]} intensity={0.5}/>

          {/* <ambientLight intensity={1.5} />
              <pointLight position={[40, 40, 40]} intensity={0.7}/> */}
          {/* <pointLight position={[-20, -10, -20]} /> */}
          <CoolShape position={[0, 0, 0]} />
          <OrbitControls enabled={true} enableZoom={false} enablePan={false}/>
        </Canvas>
        </Hidden>
      </Grid>
      <Grid direction="column" xs={12} md={4}>
        <section className="project-carousel" >
          <ProjectCarousel />
        </section>
        </Grid>
        <Grid direction="column" xs={12} md={4}>
        <Hidden smDown>
          <Canvas >
          <ambientLight intensity={.4}/>
          <pointLight position={[-10, 10, 10]}/>
            <CoolShape position={[0, 0, 0]} />
            <OrbitControls enabled={true} enableZoom={false} enablePan={false}/>
          </Canvas>
          </Hidden>
        </Grid>
        </Grid>
    </Container>
  );
}
