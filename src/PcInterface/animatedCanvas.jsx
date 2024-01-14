/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, ambientLight, directionalLight } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./modelAnimation.jsx";

const AnimatedCanvas = () => {
  return (
    <Canvas
      alpha={true}
      camera={{ fov: 65, near: 0.1, far: 1000, position: [0, 20, 120] }}
    >
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight color={"white"} intensity={1} />
      <directionalLight
        color={"yellow"}
        intensity={0.5}
        position={[0, 20, 120]}
      />
      <Model position={[3.5, -47, 0]} scale={45} />
    </Canvas>
  );
};

export default AnimatedCanvas;
