
export default function Face() {
    <group position={[0, 1.5, 0.46]}>
        <mesh position={[0, 1.5, 0.46]}>
            <planeGeometry args={[0.1, 0.1]} />
            <meshBasicMaterial color='green' />
        </mesh>
        
        <mesh position={[0.2, 0.1, 0]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <mesh position={[-0.2, 0.1, 0.01]}>
        <circleGeometry args={[0.03, 16]} />
        <meshBasicMaterial color="black" />
      </mesh>
    </group>
}