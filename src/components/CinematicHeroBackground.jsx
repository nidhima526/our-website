import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// 1. The Rocky Lunar Terrain
const Terrain = () => {
  const meshRef = useRef();
  
  // Create a custom rocky terrain using simple math displacement on a dense plane
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(60, 60, 128, 128);
    geo.rotateX(-Math.PI / 2); // Lay flat
    
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      
      // Lusion style landscape: deep crater in the center, mountains on the edges
      const distance = Math.sqrt(x*x + z*z);
      let y = 0;
      
      // Mountains far away
      if (distance > 5) {
        // Procedural rocky noise using sine/cosine stacking
        y += (Math.sin(x * 0.2) * Math.cos(z * 0.2)) * 3;
        y += (Math.sin(x * 0.5) * Math.cos(z * 0.8)) * 1.5;
        y += (Math.sin(x * 1.2) * Math.cos(z * 1.5)) * 0.5;
        
        // Slope up towards edges
        y += (distance - 5) * 0.5;
      }
      
      pos.setY(i, y - 3); // Shift down
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh ref={meshRef} geometry={geometry} receiveShadow>
      {/* Dark metallic rock material */}
      <meshStandardMaterial 
        color="#111218" 
        roughness={0.8} 
        metalness={0.2} 
        wireframe={false} 
        flatShading={true}
      />
    </mesh>
  );
};

// 2. The Glowing Portal Light Beam
const LightBeam = () => {
  const beamRef = useRef();
  
  useFrame((state) => {
    if(beamRef.current) {
      beamRef.current.rotation.y += 0.01;
      // Pulse opacity slightly
      beamRef.current.material.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group position={[0, 10, 0]}>
      {/* Inner bright beam */}
      <mesh ref={beamRef}>
        <cylinderGeometry args={[1.5, 4, 30, 32, 1, true]} />
        <meshBasicMaterial 
          color="#ffffff" 
          transparent={true} 
          opacity={0.7} 
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {/* Outer soft glow beam */}
      <mesh>
        <cylinderGeometry args={[3, 8, 30, 32, 1, true]} />
        <meshBasicMaterial 
          color="#88ccff" 
          transparent={true} 
          opacity={0.15} 
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      
      {/* Intense light source at the bottom (impact point) */}
      <pointLight position={[0, -12, 0]} intensity={100} color="#ffffff" distance={20} decay={2} />
      <pointLight position={[0, -10, 0]} intensity={50} color="#88ccff" distance={40} decay={2} />
    </group>
  );
};

// 3. Floating Debris/Rocks inside the beam
const FloatingDebris = ({ count = 150 }) => {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // Scatter in a cylinder shape around the beam
      const radius = Math.random() * 8;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 30; // Height spread
      
      temp.push({
        x, y, z,
        speedY: Math.random() * 0.05 + 0.01,
        speedRot: Math.random() * 0.02 - 0.01,
        scale: Math.random() * 0.3 + 0.05,
        rx: Math.random() * Math.PI,
        ry: Math.random() * Math.PI,
        rz: Math.random() * Math.PI,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!meshRef.current) return;
    
    particles.forEach((p, i) => {
      // Float up
      p.y += p.speedY;
      // Spin
      p.rx += p.speedRot;
      p.ry += p.speedRot;
      
      // Reset at top
      if (p.y > 15) p.y = -15;
      
      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(p.rx, p.ry, p.rz);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      {/* Rocks geometry */}
      <dodecahedronGeometry args={[1, 0]} />
      {/* Dark metallic rocks catching the light */}
      <meshStandardMaterial color="#222530" roughness={0.6} metalness={0.8} />
    </instancedMesh>
  );
};

// 4. Camera Parallax Controller
const CameraController = () => {
  const { camera } = useThree();
  
  useFrame((state) => {
    // Smoothly pan camera based on mouse
    const targetX = (state.pointer.x * 2);
    const targetY = 2 + (state.pointer.y * 2);
    
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

const CinematicHeroBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#030508] overflow-hidden">
      <Canvas camera={{ position: [0, 2, 12], fov: 60 }}>
        <color attach="background" args={['#030508']} />
        
        {/* Cinematic Fog */}
        <fog attach="fog" args={['#030508', 5, 40]} />
        
        {/* Subtle global illumination */}
        <ambientLight intensity={0.2} color="#445588" />
        
        {/* Core elements */}
        <Terrain />
        <LightBeam />
        <FloatingDebris />
        
        <CameraController />
      </Canvas>
    </div>
  );
};

export default CinematicHeroBackground;
