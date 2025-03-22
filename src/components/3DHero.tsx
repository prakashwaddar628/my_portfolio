"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, TorusKnot } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function AnimatedTorus() {
  const ref = useRef<any>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <TorusKnot ref={ref} args={[1, 0.3, 100, 16]} scale={1.2}>
      <meshStandardMaterial color="hotpink" />
    </TorusKnot>
  );
}

export default function ThreeDHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <motion.div
      ref={ref}
      className="w-full h-[400px] md:h-[500px] flex justify-center items-center"
      style={{ scale, opacity }}
    >
      <Canvas camera={{ position: [0, 0, 4] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />
        <AnimatedTorus />
      </Canvas>
    </motion.div>
  );
}
