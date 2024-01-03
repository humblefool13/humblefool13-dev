/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import * as THREE from "three";
import {
  Canvas,
  pointLight,
  ambientLight,
  directionalLight,
} from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";

import Model from "./model.jsx";

const CanvasComponent = () => {
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
      <ScrollControls pages={4} damping={0.5}>
        <Model position={[0, -40, 0]} rotation={[0, 0, 0]} />
        <Scroll html style={{ width: "100%" }}>
          <div
            style={{
              top: "130vh",
              position: "absolute",
              width: "50%",
            }}
          >
            <p style={{ color: "white", fontSize: "30px" }}>Text Here Lol</p>
          </div>
          <div
            style={{
              top: "215vh",
              position: "absolute",
              width: "50%",
            }}
          >
            Text Here2
          </div>
          <div
            style={{
              top: "320vh",
              position: "absolute",
              width: "50%",
            }}
          >
            Text Here3
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default CanvasComponent;
