export default function Cube({ position, size = [1, 1, 1], color = "orange", outline = true }) {
    return (
      <group>
        <mesh position={position}>
          <boxGeometry args={size} />
          <meshStandardMaterial color={color} />
        </mesh>
        {outline && (
          <mesh position={position}>
            <boxGeometry args={size.map((n) => n * 1.02)} />
            <meshBasicMaterial color="black" wireframe />
          </mesh>
        )}
      </group>
    );
  }