import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  modelPath: string;
  modelCenter: [number, number, number];
  modelScale: number;
  rotationAxis: 'x' | 'y' | 'z';
  rotationSpeed: number;
  rotationCenter: [number, number, number];
}

const Model: React.FC<ModelProps> = ({ 
  modelPath, 
  modelCenter, 
  modelScale, 
  rotationAxis, 
  rotationSpeed,
  rotationCenter 
}) => {
  const { scene } = useGLTF(modelPath);
  const pivotRef = useRef<THREE.Group>(null!);

  const modelOffset = modelCenter.map((v, i) => rotationCenter[i] - v) as [number, number, number];

  useFrame(() => {
    if (pivotRef.current) {
      const speed = rotationSpeed;
      if (rotationAxis === 'x') {
        pivotRef.current.rotation.x += speed;
      } else if (rotationAxis === 'y') {
        pivotRef.current.rotation.y += speed;
      } else {
        pivotRef.current.rotation.z += speed;
      }
    }
  });

  return (
    <group ref={pivotRef}>
      <primitive 
        object={scene} 
        position={modelOffset} 
        scale={modelScale} 
      />
    </group>
  );
};

const PlaceholderModel: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.2, 0.7, 1.8]} />
      <meshStandardMaterial color="#F47920" metalness={0.35} roughness={0.4} />
    </mesh>
  );
};

interface RadarModel3DProps {
  usePlaceholder?: boolean;
  modelPath?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
  modelCenter?: [number, number, number];
  modelScale?: number;
  rotationAxis?: 'x' | 'y' | 'z';
  rotationSpeed?: number;
  rotationCenter?: [number, number, number];
}

const RadarModel3D: React.FC<RadarModel3DProps> = ({ 
  usePlaceholder = false, 
  modelPath = '/models/sensor_1.glb',
  cameraPosition = [0, 140, 0],
  fov = 46,
  modelCenter = [10, 29, -45],
  modelScale = 1.55,
  rotationAxis = 'z',
  rotationSpeed = 0.012,
  rotationCenter = [0, 0, 0]
}) => {
  return (
    <div style={{ width: '100%', height: '520px' }}>
      <Canvas camera={{ position: cameraPosition, fov }}>
        <ambientLight intensity={0.28} />
        <spotLight
          position={[12, 14, 8]}
          angle={0.18}
          penumbra={1}
          intensity={0.7}
          castShadow
        />

        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            {usePlaceholder ? (
              <PlaceholderModel />
            ) : (
              <Model 
                modelPath={modelPath} 
                modelCenter={modelCenter} 
                modelScale={modelScale}
                rotationAxis={rotationAxis}
                rotationSpeed={rotationSpeed}
                rotationCenter={rotationCenter}
              />
            )}
          </group>
        </Suspense>

        <Environment preset="city" />
        <ContactShadows
          position={[0, -1.3, 0]}
          opacity={0.2}
          scale={6}
          blur={3}
        />
      </Canvas>
    </div>
  );
};

export default RadarModel3D;