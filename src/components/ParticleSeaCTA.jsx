import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ParticleSea = ({ count = 12000 }) => {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Store initial positions and physics state
  const particles = useMemo(() => {
    const temp = [];
    
    for (let i = 0; i < count; i++) {
      // Scatter heavily across the bottom width of the screen
      const x = (Math.random() - 0.5) * 60; // even wider spread
      const z = (Math.random() - 0.5) * 18; // deeper spread
      
      // Pile them up higher to accommodate 12,000 bubbles
      const y = -7.5 + Math.pow(Math.random(), 2) * 8.5; 
      
      temp.push({
        baseX: x,
        baseY: y,
        baseZ: z,
        x: x,
        y: y,
        z: z,
        vx: 0,
        vy: 0,
        vz: 0,
        // Slightly smaller sizes so 12,000 of them fit elegantly
        scale: Math.random() * 0.12 + 0.015,
        rotationX: Math.random() * Math.PI,
        rotationY: Math.random() * Math.PI,
        rotationZ: Math.random() * Math.PI,
      });
    }
    return { data: temp };
  }, [count]);

  // Set colors once on mount
  useEffect(() => {
    if (!meshRef.current) return;
    const colors = [new THREE.Color('#ffffff'), new THREE.Color('#eab308'), new THREE.Color('#facc15')];
    particles.data.forEach((p, i) => {
      // 85% white, 15% yellow for elegant contrast with so many bubbles
      const isYellow = Math.random() > 0.85;
      const color = isYellow ? colors[Math.floor(Math.random() * 2) + 1] : colors[0];
      meshRef.current.setColorAt(i, color);
    });
    meshRef.current.instanceColor.needsUpdate = true;
  }, [particles]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Map pointer to 3D space
    const pointerX = (state.pointer.x * state.viewport.width) / 2;
    const pointerY = (state.pointer.y * state.viewport.height) / 2;
    
    const time = state.clock.elapsedTime;
    
    particles.data.forEach((p, i) => {
      // 1. Natural Breathing Wave (Ultra-smooth resting fluid motion)
      const waveOffset = Math.sin(time * 1.0 + p.baseX * 0.2 + p.baseZ * 0.2) * 0.5;
      const targetY = p.baseY + waveOffset;

      // 2. Repel from pointer (Ultra-smooth Lusion-style fluid interaction)
      const dx = pointerX - p.x;
      const dy = pointerY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Extremely large radius so they sense the cursor from far away, but push softly
      const maxDist = 8.5; 
      if (dist < maxDist) {
        // Easing curve makes the push incredibly soft at the edges
        const force = Math.pow((maxDist - dist) / maxDist, 3);
        // Apply velocity incredibly gently (syrup-like)
        p.vx -= (dx / dist) * force * 0.12;
        p.vy -= (dy / dist) * force * 0.12;
        p.rotationX += force * 0.05;
        p.rotationY += force * 0.05;
      }
      
      // 3. Over-damped Spring (No bouncing, just smooth syrup gliding)
      const spring = 0.012;  // Extremely low spring force so they float back lazily
      const friction = 0.96; // Extremely high friction so they glide smoothly and never bounce
      
      p.vx += (p.baseX - p.x) * spring;
      p.vy += (targetY - p.y) * spring;
      p.vz += (p.baseZ - p.z) * spring;
      
      p.vx *= friction;
      p.vy *= friction;
      p.vz *= friction;
      
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;
      
      // Gentle idle floating rotation
      p.rotationX += 0.002;
      p.rotationY += 0.002;
      
      // Update dummy and set matrix
      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(p.rotationX, p.rotationY, p.rotationZ);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]} castShadow receiveShadow>
      {/* Bubbles / Spheres geometry */}
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial roughness={0.15} metalness={0.3} />
    </instancedMesh>
  );
};

const ParticleSeaCTA = () => {
  return (
    // Reverted back to the sleek dark theme
    <section className="relative w-full h-[70vh] md:h-[90vh] bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center border-t border-white/10">
      
      {/* Background is dark to match the brand! */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          {/* Subtle fog for depth */}
          <fog attach="fog" args={['#0a0a0a', 8, 25]} />
          
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 15, 10]} intensity={2.5} />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#eab308" />
          
          <ParticleSea count={8000} />
        </Canvas>
      </div>
      
      {/* CTA Content Overlay */}
      <div className="relative z-10 text-center pointer-events-none px-4 mt-20">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl lg:text-[9rem] font-black text-white uppercase tracking-tighter leading-none pointer-events-auto"
        >
          Let's Work<br/>
          <span className="text-yellow-500 relative inline-block group">
            Together!
            <div className="absolute -bottom-4 left-0 w-full h-2 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pointer-events-auto"
        >
          {/* Linked perfectly to the contact page */}
          <Link to="/contact">
            <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg md:text-xl uppercase tracking-widest hover:scale-110 hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Start a Project
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ParticleSeaCTA;
