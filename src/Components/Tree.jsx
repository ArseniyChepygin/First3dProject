
import Cube from "./Cube2";

export default function Tree({ position = [0, 0, 0] }) {
  return (
    <group position={position}>

      {/* <Cube position={[0, 0.5, 0]} size={[1, 1, 1]} color="blue" /> */}
        <mesh position={position}>
            <boxGeometry args={[1,1,1]}/>
            <meshToonMaterial color = "lightgreen" />
        </mesh>

    </group>
  );
}