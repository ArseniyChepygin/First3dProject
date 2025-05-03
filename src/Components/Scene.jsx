import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Boy from "./Boy"
import Tree from "./Tree"


export default function Scene() {
    return(
        <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[5, 10, 5]} intensity={1}/>
            <OrbitControls />
            <gridHelper args={[20, 20]} />

            <Boy position={[0, 0, 0]}/>
            <Tree position={[3, 0, 0]}/>
        </Canvas>
    )
};
