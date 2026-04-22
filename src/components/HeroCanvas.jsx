import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Sphere, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingGeometry({ position, color, geometry = "sphere", scale = 1 }) {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.004;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.12;
  });

  const material = (
    <meshPhysicalMaterial
      color={color}
      emissive={color}
      emissiveIntensity={0.25}
      metalness={0.65}
      roughness={0.15}
      clearcoat={1}
      clearcoatRoughness={0.1}
    />
  );

  const content =
    geometry === "torus" ? (
      <torusKnotGeometry args={[0.6, 0.22, 180, 24]} />
    ) : geometry === "octahedron" ? (
      <octahedronGeometry args={[0.88]} />
    ) : (
      <sphereGeometry args={[0.9, 48, 48]} />
    );

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {content}
        {material}
      </mesh>
    </Float>
  );
}

function OrbitRing({ radius, speed, color, offset = 0 }) {
  const ringRef = useRef(null);

  useFrame((state) => {
    if (!ringRef.current) {
      return;
    }

    ringRef.current.rotation.z = state.clock.elapsedTime * speed + offset;
    ringRef.current.rotation.x = Math.PI / 2.4;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.025, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

function ParticleField() {
  const pointsRef = useRef(null);

  const [positions, colors] = useMemo(() => {
    const particleCount = 250;
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const accent = new THREE.Color("#28cccc");
    const cyan = new THREE.Color("#7ef9ff");
    const white = new THREE.Color("#ffffff");

    for (let i = 0; i < particleCount; i += 1) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 16;
      pos[i3 + 1] = (Math.random() - 0.5) * 10;
      pos[i3 + 2] = (Math.random() - 0.5) * 16;

      const tint = i % 3 === 0 ? accent : i % 2 === 0 ? cyan : white;
      col[i3] = tint.r;
      col[i3 + 1] = tint.g;
      col[i3 + 2] = tint.b;
    }

    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function Scene() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.22) * 0.22;
    groupRef.current.rotation.x = Math.cos(t * 0.16) * 0.08;

    state.camera.position.x = Math.sin(t * 0.18) * 0.35;
    state.camera.position.y = Math.cos(t * 0.14) * 0.25;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.2, 7]} fov={40} />
      <color attach="background" args={["#020608"]} />
      <fog attach="fog" args={["#020608", 8, 18]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 3, 3]} intensity={2.2} color="#8cfbff" />
      <pointLight position={[-4, -2, 4]} intensity={1.6} color="#28cccc" />
      <Stars radius={80} depth={40} count={1500} factor={2} saturation={0} fade speed={0.3} />
      <ParticleField />
      <group ref={groupRef}>
        <OrbitRing radius={2.2} speed={0.18} color="#28cccc" />
        <OrbitRing radius={3.1} speed={-0.1} color="#7ef9ff" offset={1.1} />
        <FloatingGeometry position={[0, 0, 0]} color="#28cccc" geometry="torus" scale={1.05} />
        <FloatingGeometry position={[-2.1, 1.2, -1.2]} color="#69f2ff" geometry="octahedron" scale={0.8} />
        <FloatingGeometry position={[2.2, -1.1, -0.6]} color="#c0ffff" geometry="sphere" scale={0.72} />
        <Sphere args={[0.2, 32, 32]} position={[0, 0, 0]}>
          <meshBasicMaterial color="#ffffff" />
        </Sphere>
      </group>
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="hero-canvas-shell" aria-hidden="true">
      <Canvas dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
        <Scene />
      </Canvas>
    </div>
  );
}
