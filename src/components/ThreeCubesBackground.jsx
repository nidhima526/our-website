import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const PremiumMaterial = ({ color }) => (
  <meshPhysicalMaterial 
    color={color} 
    roughness={0.15} 
    metalness={0.4} 
    clearcoat={1} 
    clearcoatRoughness={0.1}
    reflectivity={1}
  />
);

const CrossShape = ({ position, color, scale, floatIntensity, rotationIntensity, rotation }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Map mouse position to 3D space rough coordinates
    const mouseX = (state.pointer.x * state.viewport.width) / 2;
    const mouseY = (state.pointer.y * state.viewport.height) / 2;

    // Calculate distance from mouse to the base position of this object
    const dx = mouseX - position[0];
    const dy = mouseY - position[1];
    const distance = Math.sqrt(dx * dx + dy * dy);

    // If mouse is close, apply a repel force
    if (distance < 5) {
      const force = (5 - distance) * 0.12;
      // Move away from mouse
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, -dx * force, 0.1);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -dy * force, 0.1);
      // Spin wildly when touched
      groupRef.current.rotation.x += force * 0.1;
      groupRef.current.rotation.z += force * 0.1;
    } else {
      // Gently return to original base position
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, 0, 0.03);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, 0, 0.03);
    }
  });

  // Thicker geometry for a more premium, substantial look
  const radius = 0.35;
  const length = 2.2;
  const cylinderArgs = [radius, radius, length, 32];
  const sphereArgs = [radius * 1.1, 32, 32];

  return (
    <Float 
      speed={1.2} 
      rotationIntensity={rotationIntensity} 
      floatIntensity={floatIntensity} 
      floatingRange={[-0.5, 0.5]}
    >
      <group position={position}>
        <group ref={groupRef} scale={scale} rotation={rotation}>
          {/* X axis */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={cylinderArgs} />
            <PremiumMaterial color={color} />
          </mesh>
          {/* Y axis */}
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
            <cylinderGeometry args={cylinderArgs} />
            <PremiumMaterial color={color} />
          </mesh>
          {/* Z axis */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={cylinderArgs} />
            <PremiumMaterial color={color} />
          </mesh>
          
          {/* Central connection sphere for smooth joint */}
          <mesh castShadow receiveShadow>
            <sphereGeometry args={sphereArgs} />
            <PremiumMaterial color={color} />
          </mesh>
        </group>
      </group>
    </Float>
  );
};

const ThreeCubesBackground = () => {
  const colors = ['#0033ff', '#111111', '#ffffff'];

  // Generate random shapes
  const shapes = useMemo(() => {
    // 70 thick objects give the perfect dense, massive look without overcrowding
    return Array.from({ length: 70 }).map((_, i) => {
      // Clustered bell-curve distribution
      const rX = (Math.random() + Math.random() - 1) * 22; 
      const rY = (Math.random() + Math.random() - 1) * 14;
      const rZ = (Math.random() + Math.random() - 1) * 18 - 4; // pushed slightly deeper
      
      return {
        id: i,
        position: [rX, rY, rZ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        // Larger scale for that massive, cinematic feel
        scale: Math.random() * 1.2 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        floatIntensity: Math.random() * 5 + 1,
        rotationIntensity: Math.random() * 3 + 1,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden opacity-90">
      <Canvas shadows camera={{ position: [0, 0, 9], fov: 45 }}>
        {/* Fog creates incredible depth by fading background objects into darkness */}
        <fog attach="fog" args={['#050505', 8, 25]} />
        
        <ambientLight intensity={1.2} />
        <directionalLight 
          position={[10, 15, 10]} 
          intensity={3} 
          castShadow 
          shadow-mapSize-width={2048} 
          shadow-mapSize-height={2048}
        />
        <directionalLight 
          position={[-10, -10, -5]} 
          intensity={1.5} 
          color="#0033ff" // Subtle blue back-light rim reflection
        />
        <Environment preset="city" />
        
        {shapes.map((shape) => (
          <CrossShape key={shape.id} {...shape} />
        ))}
      </Canvas>
      {/* Dark gradient overlay to blend perfectly with the black theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black pointer-events-none" />
    </div>
  );
};

export default ThreeCubesBackground;
