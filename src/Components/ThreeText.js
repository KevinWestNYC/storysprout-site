import * as THREE from "three";
import {Color} from "three";
import React, { useMemo, useRef, useLayoutEffect, useEffect } from "react";
import { extend, useLoader } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import boldUrl from "./bold.blob";

extend({ TextGeometry });

export default function ThreeText({
  children,
  vAlign = "center",    
  hAlign = "center",
  size = 1.5,
  // color = "#000000",
  // color = "#CB8DF7",
  color = "#C9D6FF",
  ...props
}) {
  const font = useLoader(FontLoader, boldUrl);
  const config = useMemo(
    () => ({
      font,
      size: 40,
      height: 30,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [font]
  );
  const mesh = useRef();
  useLayoutEffect(() => {
    const size = new THREE.Vector3();
    mesh.current.geometry.computeBoundingBox();
    mesh.current.geometry.boundingBox.getSize(size);
    mesh.current.position.x =
      hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x;
    mesh.current.position.y =
      vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y;
  }, [children]);


  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh} >
        <textGeometry args={[children, config]} />
        {/* <meshNormalMaterial /> */}
        {/* <meshStandardMaterial color={color} roughness={0.5} metalness={0.7}/> */}
        {/* <meshStandardMaterial color={'#FFC1CF'} roughness={0.8} metalness={0.7} /> */}
        {/* <meshStandardMaterial color={'#97a4cd'} roughness={0.5} metalness={0.8} /> */}
        <meshStandardMaterial color={'#cc4d6b'} roughness={0.5} metalness={0.6} />
        {/* <meshStandardMaterial color={'#B3A8E6'} roughness={0.5} metalness={0.8} /> */}
      </mesh>
    </group>
  );
}

// export default function ThreeText({
//   children,
//   vAlign = "center",
//   hAlign = "center",
//   size = 1.5,
//   colors = ["#cc4d6b","#E6A8C7","FFC1CF", "#CB8DF7"], // Add an array of colors here
//   ...props
// }) {
//   const font = useLoader(FontLoader, boldUrl);
//   const config = useMemo(
//     () => ({
//       font,
//       size: 40,
//       height: 30,
//       curveSegments: 32,
//       bevelEnabled: true,
//       bevelThickness: 6,
//       bevelSize: 2.5,
//       bevelOffset: 0,
//       bevelSegments: 8,
//     }),
//     [font]
//   );
//   const mesh = useRef();
//   const material = useRef();
//   const currentColor = useRef(new Color(colors[0])); // Store the current color as a ref

//   useLayoutEffect(() => {
//     const size = new THREE.Vector3();
//     mesh.current.geometry.computeBoundingBox();
//     mesh.current.geometry.boundingBox.getSize(size);
//     mesh.current.position.x =
//       hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x;
//     mesh.current.position.y =
//       vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y;
//   }, [children]);

//   useEffect(() => {
//     const transitionColors = () => {
//       let colorIndex = 0;
//       setInterval(() => {
//         const startColor = currentColor.current;
//         const endColor = new Color(colors[(colorIndex + 1) % colors.length]);

//         const lerpFactor = 0.1; // Adjust the transition speed here

//         currentColor.current = startColor.lerp(endColor, lerpFactor);
//         material.current.color = currentColor.current;
//         colorIndex++;
//       }, 2000); // Adjust the interval time here
//     };

//     transitionColors();
//   }, [colors]);

//   return (
//     <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
//       <mesh ref={mesh}>
//         <textGeometry args={[children, config]} />
//         <meshStandardMaterial ref={material} color={currentColor.current} roughness={0.5} metalness={0.8} />
//       </mesh>
//     </group>
//   );
// }
