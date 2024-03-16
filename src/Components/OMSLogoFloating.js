import React, { useRef, useLayoutEffect } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import OMSLogo from "../Images/OMSLogo.webp"; // Ensure this path is correct

export default function OMSLogoFloating({
  size = 1.5, // Adjust the size as needed
  ...props
}) {
  const texture = useLoader(TextureLoader, OMSLogo);
  const mesh = useRef();
  
  useLayoutEffect(() => {
    // Adjust the logo position if needed
    // mesh.current.position.x = 0;
    // mesh.current.position.y = 0;
  }, []);

  return (
    <group {...props} scale={[size, size, size]}>
      <mesh ref={mesh}>
        {/* Create a plane geometry for the logo */}
        <planeGeometry args={[5, 5]} /> {/* Adjust the size args as needed */}
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}
