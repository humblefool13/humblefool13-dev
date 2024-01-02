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
import { OrbitControls } from "@react-three/drei";

import CanvasComponent from "./canvas.jsx";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="text-div">
        <div className="text-behind">humblefool13</div>
        <div className="text-stroked-infront">humblefool13</div>
      </div>
      <div className="homepage-container">
        <CanvasComponent />
      </div>
    </div>
  );
};

export default Homepage;
