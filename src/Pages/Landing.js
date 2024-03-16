import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Container, Grid, Hidden } from "@material-ui/core";
import { OrbitControls,Box } from '@react-three/drei'
import * as THREE from 'three'
import ThreeText from '../Components/ThreeText'
import SciFiFlight from '../Components/SciFiFlight';

function LandingText() {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
          Math.sin(clock.getElapsedTime()) * 0.1)
  );
  return (
    <group ref={ref}>
      <ThreeText hAlign="right" position={[-12, 9.5, 0]} children="HI" />
      <ThreeText hAlign="right" position={[-12, 3, 0]} children="IM" />
      <ThreeText hAlign="right" position={[-12, -3.5, 0]} children="KEVIN" />
    </group>
  );
}
{/* <group ref={ref}>
  <ThreeText hAlign="right" position={[-20, 9.5, 0]} children="HI" />
  <ThreeText hAlign="right" position={[-20, 3, 0]} children="IM" />
  <ThreeText hAlign="right" position={[-20, -3.5, 0]} children="KEVIN" />
</group> */}

function LandingTextSmall() {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
          Math.sin(clock.getElapsedTime()) * 0.1)
  );
  return (
    <group ref={ref}>
      <ThreeText hAlign="right" position={[-12, 9.5, 0]} children="HI" />
      <ThreeText hAlign="right" position={[-12, 3, 0]} children="IM" />
      <ThreeText hAlign="right" position={[-12, -3.5, 0]} children="KEVIN" />
    </group>
  );
}


export default function Landing() {
  
  return (
    <Container className="page-content">
      {/* <p>
        toDo:<br></br> *fill out skills
        section *new project? *add another picture of me? * edit the about me text *deploy{" "}
      </p> */}
      <Grid container className="landing-container">
        <Grid item direction="row" xs={12}>
          <Hidden smUp>
            <Canvas
              id="landing-canvas"
              style={{
                height: "90vh",
                width: "90vw",
                cursor: "grab"
              }}
              camera={{ position: [20, 0, 40] }}
            >
              <ambientLight intensity={1.5} />
              <pointLight position={[40, 40, 40]} intensity={0.7}/>
              <pointLight position={[0, 0, 40]} intensity={0.7}/>
              <Suspense fallback={null}>
      {/* <OrbitControls enabled={true} enableZoom={false} enablePan={true}/> */}
                <LandingTextSmall />
              </Suspense>

            </Canvas>
          </Hidden>
          <Hidden xsDown>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"  }}>
            <Canvas
              id="landing-canvas"
              style={{
                height: "100vh",
                width: "100vw",
                cursor: "grab"
              }}
              camera={{ position: [0, 0, 25] }}
            >
              <ambientLight intensity={0.7} />
              <pointLight position={[40, 40, 40]} intensity={0.7}/>
              <pointLight position={[0, 0, 40]} intensity={0.5}/>
              <Suspense fallback={null}>
                <LandingText />
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

// {/* <Canvas
//           colorManagement
//             style={{
//               height: "90vh",
//               width: "90vw",
//             }}
//             camera={{ position: [0, 0, 15] }}
//           >
//             <ambientLight intensity={.7}/>
//             <directionalLight
//           castShadow
//           position={[0, 10, 0]}
//           intensity={15}
//         />
//             <pointLight position={[10, 10, 10]} />
//             {/* <pointLight position={[-10, -10, -10]} /> */}
//             <ThreeName position={[0, 0, 0]} />
//             {/* <Box position={[0, 0, 0]} /> */}
//             {/* <Wormhole position={[0, 0, 0]}/> */}
//           </Canvas> */}