
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Float, MeshWobbleMaterial, PerspectiveCamera } from '@react-three/drei';

const FloatingCube: React.FC = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef} position={[2, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <MeshWobbleMaterial factor={0.4} speed={2} color="#4f46e5" />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-2, 1, -2]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshWobbleMaterial factor={0.6} speed={3} color="#06b6d4" />
        </mesh>
      </Float>
    </>
  );
};

export default FloatingCube;
