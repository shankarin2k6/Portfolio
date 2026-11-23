import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function ParticlesWave() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-wave"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#020617" } },
        particles: {
          number: { value: 60 },
          color: { value: ["#00FFFF", "#7DF9FF", "#FF00FF"] },
          shape: { type: "triangle" },
          opacity: { value: 0.5, random: true },
          size: { value: { min: 2, max: 5 } },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: "bounce",
            random: true,
            straight: false,
          },
          wobble: { enable: true, distance: 6, speed: 5 },
          links: { enable: false },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "attract" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            attract: { distance: 120, duration: 0.4 },
            push: { quantity: 3 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}
