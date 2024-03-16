import React, { useRef } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.y = 2;
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
// document.body.appendChild(renderer, domElement);

scene.fog = new THREE.FogExp2(0x000000, 0.04);

const squareGeo = new THREE.PlaneGeometry();
const color = 0xff00ff;
const basicMat = new THREE.MeshBasicMaterial({ color });
const mesh = new THREE.Mesh(squareGeo, basicMat);
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
export default function SciFiFlight() {
  const ref = useRef();

  return(

  <mesh></mesh>
  // <div ref={ref} />
  )
}
