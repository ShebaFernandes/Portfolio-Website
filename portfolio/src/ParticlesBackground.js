import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        autoPlay: true,
        background: {
          color: "#000000", // Black background
        },
        fullScreen: {
          enable: true,
          zIndex: 10, // Ensure particles stay in the background
        },
        detectRetina: true,
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
          color: {
            value: "#ffffff",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2, // Reduce opacity of connections
            width: 1,
          },
          opacity: {
            value: 0.3, // Reduce opacity of particles to make text clearer
            animation: {
              enable: false,
            },
          },
          shape: {
            type: "circle",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: false, // 🔴 Disable click-based particle spawning
            },
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.4,
              },
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
