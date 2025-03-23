"use client";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine"; // ✅ Ensure correct Engine type

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles Engine Loaded:", engine);
    await loadFull(engine); // ✅ Ensures tsparticles engine loads correctly
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#000" } },
        particles: {
          color: { value: "#ffffff" },
          move: { enable: true, speed: 1 },
          number: { value: 100 },
          size: { value: 3 },
        },
      }}
    />
  );
};

export default ParticlesBackground;
