import React, { useRef } from "react";
import { Canvas, extend,useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Montserrat from "../Montserrat.json";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { OrbitControls, Stats, Text } from "@react-three/drei";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"

import texture from "./pinkstone.jpg"
extend({ TextGeometry })


export default function ThreeName(props) {

const loader = new FontLoader();

const font = loader.parse( Montserrat );
  const mesh = useRef();

  const textOptions = {
    font:font,
    size: 5,
    height: 2,
  };

  const three_texture = new THREE.TextureLoader().load(texture)
  three_texture.wrapS = THREE.RepeatWrapping
  three_texture.wrapT = THREE.RepeatWrapping
  three_texture.repeat.set(0.1, 0.1);

  useFrame(() => {
    // mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.005
    // mesh.current.rotation.z += 0.01
    mesh.current.geometry.center()
  })

  return (
    <mesh ref={mesh} {...props} position={[-5, 0, -10]}>
      <textGeometry attach="geometry" args={["Welcome", textOptions]} />
      <meshStandardMaterial attach="material" args={[{ map: three_texture }]}/>
      {/* <OrbitControls /> */}
    </mesh>
  );
}

