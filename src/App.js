import './App.css'
import { Canvas } from '@react-three/fiber'
import { Sky, OrbitControls, useGLTF } from '@react-three/drei'


function Shoe() {

  const { scene } = useGLTF("/shoe.gltf")
  return (
    <primitive object={scene} scale={1} />
  )
}

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color={"red"} />
    </mesh>
  )
}


function App() {
  return (
    <Canvas style={{ height: window.innerHeight }}>
      <OrbitControls />
      <Sky />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      {/* <Box /> */}
      <Shoe />
    </Canvas>
  );
}

export default App;
