/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import * as THREE from "three";
import {
  Canvas,
  pointLight,
  ambientLight,
  directionalLight,
  axesHelper,
  useFrame,
} from "@react-three/fiber";
import Model from "./model.jsx";
import { OrbitControls } from "@react-three/drei";

const Homepage = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
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
    <div className="homepage">
      <div className="text-div">
        <div className="text-behind">humblefool13</div>
        <div className="text-stroked-infront">humblefool13</div>
      </div>
      <div className="homepage-container">
        <Canvas
          alpha={true}
          id="canvas"
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 20, 90] }}
        >
          <ambientLight intensity={0.5} color={"white"} />
          <directionalLight
            color={"cyan"}
            intensity={0.9}
            position={[
              cursorPosition.x - size.width / 2,
              -(cursorPosition.y - size.height / 2),
              100,
            ]}
          />
          <OrbitControls enableZoom={false} />
          <Model position={[0, -40, 0]} rotation={[0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  );
};

export default Homepage;
