'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/model3D.glb'); // Carga el modelo

  return <primitive object={scene} scale={0.5} />; // Escala para ajustar el tamaño
}

export default function ModelViewer3D() {
  return (
    <Canvas
      camera={{ position: [5, 2, 5], fov: 50 }} // Posición de la cámara
      style={{ height: '50vh', width: '50%' }}
    >
      <ambientLight intensity={0.5} /> {/* Luz ambiental */}
      <directionalLight position={[5, 5, 5]} intensity={1} /> {/* Luz direccional */}
      <Model />
      <OrbitControls /> {/* Permite rotar, acercar y alejar la cámara */}
    </Canvas>
  );
}
