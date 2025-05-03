// Boy.jsx

import Cube from "./Cube2";
import Face from "./Face";

export default function Boy({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Cube position={[0, 0.5, 0]} size={[1, 1, 1]} color="blue" />
      <Cube position={[0, 1.5, 0]} size={[0.9, 0.9, 0.9]} color="peachpuff" outline= {false}/>
      <Face />
      <Cube position={[-0.7, 0.5, 0]} size={[0.3, 1, 0.3]} color="blue" />
      <Cube position={[0.7, 0.5, 0]} size={[0.3, 1, 0.3]} color="blue" />
      <Cube position={[-0.3, -0.5, 0]} size={[0.3, 1, 0.3]} color="darkblue" />
      <Cube position={[0.3, -0.5, 0]} size={[0.3, 1, 0.3]} color="darkblue" />
    </group>
  );
}