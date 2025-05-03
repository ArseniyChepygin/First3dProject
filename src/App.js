import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

// import Cube from "./Components/Cube";
// import Face from "./Components/Face";
import Boy from "./Components/Boy";
import Scene from "./Components/Scene";

import { useControls } from "leva";
import React from "react";
import './App.css';
function RotatingBox() {
  const meshRef = useRef();
  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.x += 0.01
  //     meshRef.current.rotation.y += 0.01
  //   }
  // });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]}/>
      <meshPhongMaterial color="yellow"/>
    </mesh>
  );
}

function App() {
  const colors = useControls("Hero colors", {
    head: "#f00",
    body: "#0f0",
    hand: "#00f",
    leg: "#0ff"
  });

  return (
    <div id="canvas-container" className="App">
      <Scene />
      <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
        {/* <RotatingBox /> */}
        {/* <Cube colors={colors}/> */}
        <Boy position={[0,0,0]}/>
        <ambientLight intensity={0.3} />
        {/* <directionalLight position={[0, 0, 5]} color="red"/> */}
        <directionalLight position={[0, 0, 5]} intensity={1}/>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
createRoot(document.getElementById('root')).render(<App />)
export default App;