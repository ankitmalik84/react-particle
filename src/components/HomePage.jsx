import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export default function HomePage() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (engine) => {
    console.log(engine);
  });
  return (
    <>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#202020",
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
                mode: "grab",
              },
              mode: {
                push: {
                  quantity: 4,
                },
                grab: {
                  duration: 0.4,
                  distance: 150,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#f77839",
              //   value: "#fff",
            },
            links: {
              enable: true,
              width: 1,
              opacicty: 1,
              distance: 150,
            },
            move: {
              enable: true,
              direction: "none",
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            collisions: {
              enable: true,
            },
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              min: 1,
              max: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className='main'>
        <nav>
          <h1>
            Ankit<span>Malik</span>
          </h1>
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Contact</li>
            <li>Projects</li>
            <li>Services</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
