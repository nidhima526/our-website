import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Custom 3D Astronaut built from primitives (Guaranteed to load instantly!)
const Astronaut3D = ({ isPlaying }) => {
  const group = useRef();
  
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    
    // Idle floating animation
    group.current.position.y = Math.sin(t * 1.5) * 0.2;
    group.current.rotation.y = Math.sin(t * 0.5) * 0.3;
    group.current.rotation.z = Math.sin(t * 0.8) * 0.1;

    // "Play" animation: The astronaut flies forward and spins!
    if (isPlaying) {
      group.current.rotation.y += 0.05;
      group.current.position.z = Math.min(group.current.position.z + 0.1, 4);
    } else {
      group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, 0, 0.1);
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
      </mesh>
      {/* Visor */}
      <mesh position={[0, 1.2, 0.4]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.8} />
      </mesh>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 1.2, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} />
      </mesh>
      {/* Backpack */}
      <mesh position={[0, 0, -0.4]}>
        <boxGeometry args={[0.6, 1, 0.4]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.5} />
      </mesh>
      {/* Left Arm */}
      <mesh position={[-0.6, 0.2, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.15, 0.12, 0.8, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} />
      </mesh>
      {/* Right Arm */}
      <mesh position={[0.6, 0.2, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.15, 0.12, 0.8, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} />
      </mesh>
      {/* Left Leg */}
      <mesh position={[-0.25, -1, 0]}>
        <cylinderGeometry args={[0.18, 0.15, 0.9, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} />
      </mesh>
      {/* Right Leg */}
      <mesh position={[0.25, -1, 0]}>
        <cylinderGeometry args={[0.18, 0.15, 0.9, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} />
      </mesh>
    </group>
  );
};

// Glowing Planet background
const Planet = () => {
  const planetRef = useRef();
  
  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={planetRef} position={[0, -10, -5]}>
      <sphereGeometry args={[8, 64, 64]} />
      <meshStandardMaterial color="#0055ff" emissive="#002288" emissiveIntensity={0.5} roughness={0.8} />
    </mesh>
  );
};

const AstronautTablet = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full py-32 bg-[#f8f9fa] flex flex-col items-center justify-center overflow-hidden border-t border-gray-200">
      
      {/* Light background ambient glow (Cyan) just like Lusion */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-300/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center">
        
        {/* Hyper-Realistic CSS iPad Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-[900px] aspect-[4/3] md:aspect-[1.43/1] bg-gradient-to-b from-[#333333] to-[#1a1a1a] rounded-[2.5rem] md:rounded-[3.5rem] p-[1rem] md:p-[1.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3)] mx-auto cursor-pointer group"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {/* Inner bezel shadow for depth */}
          <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none"></div>

          {/* Screen */}
          <div className="relative w-full h-full bg-black rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-2 border-black/80 shadow-[inset_0_0_10px_rgba(0,0,0,1)]">
            
            {/* REAL-TIME 3D ASTRONAUT SCENE */}
            <div className={`absolute inset-0 w-full h-full transition-transform duration-1000 ${isPlaying ? 'scale-100' : 'scale-105'}`}>
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
                <pointLight position={[-5, 5, -5]} intensity={5} color="#00ffff" />
                
                <Astronaut3D isPlaying={isPlaying} />
                <Planet />
                
                {/* Space Stars (Particles) */}
                <points>
                  <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={300} array={new Float32Array(900).map(() => (Math.random() - 0.5) * 40)} itemSize={3} />
                  </bufferGeometry>
                  <pointsMaterial size={0.1} color="#ffffff" />
                </points>
              </Canvas>
            </div>
            
            {/* Dark overlay when paused */}
            <div className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-all duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}></div>

            {/* Play Button Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isPlaying ? 'opacity-0 scale-150 pointer-events-none' : 'opacity-100 scale-100'}`}>
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <Play className="text-white w-10 h-10 ml-2 drop-shadow-lg" fill="currentColor" />
              </div>
            </div>

          </div>
          
          {/* Hardware Details: Camera */}
          <div className="absolute top-1/2 -translate-y-1/2 left-3 md:left-4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-black border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] hidden md:block">
            {/* Camera lens reflection */}
            <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-blue-500/40"></div>
          </div>
          
          {/* Hardware Details: Volume/Power Buttons on the edge */}
          <div className="absolute -top-1 left-32 w-16 h-1 rounded-t-lg bg-[#333333] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
          <div className="absolute -top-1 left-52 w-12 h-1 rounded-t-lg bg-[#333333] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AstronautTablet;
