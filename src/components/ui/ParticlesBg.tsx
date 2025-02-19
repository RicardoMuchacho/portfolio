import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import useMobile from "@/hooks/useMobile";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      // <div className="absolute top-0 left-0 right-0 h-[400px] -z-5">
      <div className="absolute top-0 left-0 right-0 h-full -z-5">
        <Particles
          id="tsparticles"
          className="w-full h-full"
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "#FFFFFF",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              move: {
                enable: true,
                speed: { min: 1, max: 6 }
              },
              number: {
                value: isMobile ? 10 : 20,
                max: 30
              },
              opacity: {
                value: 1
              },
              rotate: {
                path: true
              },
              shape: {
                options: {
                  image: [
                    {
                      height: 200,
                      src: "/bgIcons/html.svg",
                      width: 200
                    },
                    {
                      height: 200,
                      src: "/bgIcons/css.svg",
                      width: 200
                    },
                    {
                      height: 200,
                      src: "/bgIcons/jest.svg",
                      width: 200
                    },
                    {
                      height: 200,
                      src: "/bgIcons/js.svg",
                      width: 200
                    },
                    {
                      height: 200,
                      src: "/bgIcons/react.svg",
                      width: 200
                    },
                    {
                      height: 200,
                      src: "/bgIcons/node.svg",
                      width: 200
                    },
                    {
                      gif: true,
                      height: 200,
                      src: "/bgIcons/tailwind.svg",
                      width: 200
                    },
                  ]
                },
                type: "image"
              },
              size: {
                value: {
                  min: 32,
                  max: 64
                }
              }
            },
            detectRetina: true,
          }}
        />
      </div>

    )
  );
};

export default ParticlesBg