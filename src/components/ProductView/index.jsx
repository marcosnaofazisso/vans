import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, OrbitControls, useGLTF } from '@react-three/drei'

function Shoe() {

    const { scene } = useGLTF("/shoe.gltf")
    const shoeRef = useRef()

    useFrame(() => {
        shoeRef.current.rotation.y += 0.01
    })

    return (
        <primitive ref={shoeRef} object={scene} scale={1} />
    )
}

export default function ProductView() {
    return (
        <Canvas style={{ height: '90vh', border: '5px solid #F00' }}>
            <OrbitControls />
            <Stars />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Shoe />
        </Canvas>
    );
}
