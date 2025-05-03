
// Face.jsx

export default function Face() {
  return (
    <group position={[0, 1.5, 0.46]}>
      <mesh position={[-0.2, 0.1, 0]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <mesh position={[0.2, 0.1, 0]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <mesh position={[-0.2, 0.1, 0.01]}>
        <circleGeometry args={[0.03, 16]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <mesh position={[0.2, 0.1, 0.01]}>
        <circleGeometry args={[0.03, 16]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <mesh position={[0, -0.15, 0]}>
        <planeGeometry args={[0.2, 0.05]} />
        <meshBasicMaterial color="black" />
      </mesh>
    </group>
  );
}