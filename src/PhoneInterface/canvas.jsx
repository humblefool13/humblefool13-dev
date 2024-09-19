/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import * as THREE from "three";
import {
  Canvas,
  pointLight,
  ambientLight,
  directionalLight,
} from "@react-three/fiber";
import { ScrollControls, Sparkles } from "@react-three/drei";

import Model from "./model.jsx";
import OverlayComponent from "./overlay.jsx";

const CanvasComponent = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleWindowMouseMove = (event) => {
    setCursorPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const handleWindowResize = (event) => {
    setSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Canvas
      alpha={1}
      id="canvas"
      className="z-0"
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 20, 90] }}
    >
      <ambientLight intensity={0.5} color={"white"} />
      <ambientLight intensity={0.3} color={"#6af50d"} />
      <ambientLight intensity={0.3} color={"#ffeb3b"} />
      <directionalLight
        color={"cyan"}
        intensity={0.9}
        position={[
          cursorPosition.x - size.width / 2,
          -(cursorPosition.y - size.height / 2),
          100,
        ]}
      />
      <directionalLight
        color={"yellow"}
        intensity={0.6}
        position={[
          -cursorPosition.x - size.width / 2,
          +(cursorPosition.y - size.height / 2),
          100,
        ]}
      />
      <directionalLight
        color={"blue"}
        intensity={0.6}
        position={[
          +(cursorPosition.y - size.height / 2),
          -cursorPosition.x - size.width / 2,
          100,
        ]}
      />
      <directionalLight
        color={"green"}
        intensity={0.6}
        position={[0, 0, 100]}
      />
      <directionalLight
        color={"purple"}
        intensity={0.6}
        position={[0, 0, 80]}
      />
      <Sparkles
        count={400}
        scale={200}
        color={"#34ddd5"}
        size={40}
        speed={5}
        noise={0}
      />
      <Sparkles
        count={400}
        scale={200}
        color={"#e25e46"}
        size={40}
        speed={5}
        noise={0}
      />
      <ScrollControls pages={5} damping={0.2}>
        <OverlayComponent />
        <Model position={[0, -55, 0]} rotation={[0, 0, 0]} />
      </ScrollControls>
    </Canvas>
  );
};

export default CanvasComponent;
