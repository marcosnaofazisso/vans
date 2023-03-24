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
        <>
            <Canvas style={{ height: window.innerWidth > 800 ? '90vh' : '40vh', cursor: 'grab' }}>
                <OrbitControls />
                <Stars />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 15, 10]} angle={0.3} />
                <Shoe />
            </Canvas>
            {window.innerWidth < 800 && (<div style={{ height: '20vh', margin: '0 auto', fontSize: '3rem', marginTop: '4rem', padding: '1rem 1rem 0 1rem' }}>
                ⬆⬆
            </div>)}
        </>
    );
}
