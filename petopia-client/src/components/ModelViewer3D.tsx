'use client'; // Necesario para React Three Fiber en Next.js

import { Canvas } from '@react-three/fiber';

export default function ModelViewer3D() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}
