import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { BoxBufferGeometry } from "three";
import { softShadows } from "@react-three/drei"
softShadows()

export default function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (
    // mesh.current.rotation.x += 0.002,
    mesh.current.rotation.z += 0.003,
    mesh.current.rotation.y -= 0.007
    ));

    // const purple = "#5066F3"
    // const pink = "#F9686A"
    // const purple = "#A091E6"
    // const pink = "#E6A8C7"
    const purple = "#A091E6"
    const pink = "#cc4d6b"
    // "#fe858c"

  return ( 
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.35 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry castShadow args={[2, 2, 2]} />
      <meshStandardMaterial receiveShadow color={hovered ? pink : purple} roughness={0.5} metalness={0.6} />
    </mesh>
  );
}
// #bee5bf
