"use client";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Correct import

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (main) => {
    console.log("Initializing particles...");
    await loadSlim(main); // Use loadSlim instead of loadFull
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#0d1117" },
        particles: {
          number: { value: 100 },
          move: { enable: true, speed: 1 },
          shape: { type: "circle" },
          size: { value: 3 },
        },
      }}
    />
  );
}
