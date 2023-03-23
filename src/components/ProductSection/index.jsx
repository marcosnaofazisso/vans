import React from 'react'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sky, Sparkles, Cloud, OrbitControls, useGLTF } from '@react-three/drei'


function RockShoe() {
    const { scene } = useGLTF("/rock.gltf")
    const shoeRef = useRef()
    useFrame(() => {
        shoeRef.current.rotation.y += 0.01
    })

    return (
        <primitive ref={shoeRef} object={scene} scale={1.5} />
    )
}

export default function ProductSection() {
    return (
        <Canvas style={{ height: '80vh' }} camera={{ position: [2, 6, 5] }}>
            <OrbitControls />
            <Sparkles
                number={200}
                speed={0.5}
                size={2}
                color={'pink'}
            />
            <ambientLight intensity={12} />
            <spotLight position={[10, 95, 200]} angle={15} />
            <RockShoe />
        </Canvas>
    );
}

