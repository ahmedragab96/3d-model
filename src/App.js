import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './components/model/Model';
import ModelFemale from './components/model/Model-female';

export default function App() {
   return (
      <Canvas
         camera={{ position: [2, 0, 12.25], fov: 30 }}
         style={{
            backgroundColor: '#111a21',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 0]} />
            <ModelFemale position={[2, -0.9, 4]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}