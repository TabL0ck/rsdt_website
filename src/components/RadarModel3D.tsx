import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Если есть готовая модель, загружаем её
const Model: React.FC = () => {
  const { scene } = useGLTF('/models/sensor_1.glb'); // путь к модели
  const ref = useRef<THREE.Group>(null);

  const modelCenter = [10, 29, -45]; // пример – замени на свои числа!
  const offset = modelCenter.map(v => -v); // инвертируем зна

  // Лёгкое автоматическое вращение
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += 0.01; // скорость вращения
    }
  });

  return <primitive ref={ref} object={scene} position={[offset[0], offset[1], offset[2]]} scale={1.5} />;
};

// Заглушка, если модели нет (простая геометрия)
const PlaceholderModel: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 0.6, 1.5]} />
      <meshStandardMaterial color="#F47920" metalness={0.3} roughness={0.4} />
    </mesh>
  );
};

// Основная сцена
const RadarModel3D: React.FC<{ usePlaceholder?: boolean }> = ({ usePlaceholder = false }) => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 150, -0], fov: 45 }}>
        <ambientLight intensity={0.2} />

        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={0.5}
        />

        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            {usePlaceholder ? <PlaceholderModel /> : <Model />}
          </group>
        </Suspense>


        <Environment preset="city" />

        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.2}
          scale={5}
          blur={2.5}
        />
      </Canvas>
    </div>
  );
};


export default RadarModel3D; 