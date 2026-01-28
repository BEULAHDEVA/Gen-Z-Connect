import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props: any) {
  const ref = useRef<any>();
  const [sphere] = random.inSphere(new Float32Array(5000), { radius: 1.5 });

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
          color="#ff00ff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function Grid() {
   useFrame((state) => {
     state.camera.position.z = 2 + Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
   })
   return (
     <gridHelper args={[20, 20, 0x00ffff, 0x333333]} position={[0, -1, 0]} rotation={[0, 0, 0]} />
   );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-background">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <ambientLight intensity={0.5} />
      </Canvas>
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </div>
  );
}
