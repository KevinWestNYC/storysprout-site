import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { DodecahedronBufferGeometry } from "three";
import { softShadows } from "@react-three/drei";
softShadows();

export default function CustomShape(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.z += 0.003;
    mesh.current.rotation.y -= 0.007;
  });

  const hoverColor = "#97a4cd";
  const nonhoverColor = "#cc4d6b";

  return (
    <mesh
    
      {...props}
      ref={mesh}
      scale={active ? 1.35 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <dodecahedronBufferGeometry attach="geometry" args={[1.2, 0]}  />
      <meshStandardMaterial
        attach="material"
        color={hovered ? hoverColor : nonhoverColor}
        roughness={0.5}
        metalness={0.6}
      />
    </mesh>
  );
}
