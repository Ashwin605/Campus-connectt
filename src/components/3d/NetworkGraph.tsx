"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function NetworkNodes(props: any) {
  const ref = useRef<any>(null);
  
  const sphere = useMemo(() => {
    // Generate random points in a sphere
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const radius = 2 + Math.random() * 2;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#DDEFE0"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full opacity-50 dark:opacity-80">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <NetworkNodes />
      </Canvas>
    </div>
  );
}
