"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useScroll } from "framer-motion";
import { Points, PointMaterial, Environment } from "@react-three/drei";

function BreathingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 800;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.001;
    pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <Points positions={positions} ref={pointsRef}>
      <PointMaterial
        transparent
        color="#80ffe8"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function KatanaAssembly() {
  const groupRef = useRef<THREE.Group>(null);
  const bladeRef = useRef<THREE.Mesh>(null);
  const { scrollYProgress } = useScroll();

  useFrame((state) => {
    if (!groupRef.current || !bladeRef.current) return;
    const scrollValue = scrollYProgress.get();

    // 45 degree angle orientation with organic sway
    groupRef.current.rotation.z = Math.PI / 4;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;

    // Unsheathing logic: Move blade out based on scroll (max extension at 0.6 scroll)
    const unsheatheFactor = Math.min(scrollValue * 6, 3.8);
    bladeRef.current.position.y = unsheatheFactor;

    // Total Concentration Breathing: Pulsing metal glow
    if (bladeRef.current.material instanceof THREE.MeshStandardMaterial) {
      bladeRef.current.material.emissiveIntensity = 1.5 + Math.sin(state.clock.elapsedTime * 5) * 1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Sheath (Saya) - Highly reflective lacquer */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.1, 4.4, 0.28]} />
        <meshStandardMaterial color="#050505" roughness={0.05} metalness={0.9} />
      </mesh>

      {/* Blade (The Soul) - High detail edge */}
      <mesh ref={bladeRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.03, 4, 0.2]} />
        <meshStandardMaterial 
          color="#e0e0e0" 
          emissive="#80ffe8" 
          emissiveIntensity={2} 
          metalness={1} 
          roughness={0.02} 
        />
      </mesh>

      {/* Tsuba (Guard) - Intricate metallic gold/red */}
      <mesh position={[0, -2.2, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.08, 16]} />
        <meshStandardMaterial color="#e63946" metalness={1} roughness={0.1} />
      </mesh>

      {/* Handle (Tsuka) - Traditional wrap texture */}
      <mesh position={[0, -3, 0]}>
        <boxGeometry args={[0.14, 1.4, 0.22]} />
        <meshStandardMaterial color="#121212" roughness={0.8} />
      </mesh>
    </group>
  );
}

export default function KatanaScene() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
        <ambientLight intensity={0.2} />
        <spotLight position={[5, 5, 5]} intensity={10} angle={0.3} penumbra={1} color="#80ffe8" />
        <pointLight position={[-5, -5, -5]} intensity={5} color="#e63946" />
        <Environment preset="city" />
        <KatanaAssembly />
        <BreathingParticles />
      </Canvas>
    </div>
  );
}
