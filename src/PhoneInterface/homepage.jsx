import React from "react";
import CanvasComponent from "./canvas.jsx";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="text-div absolute flex justify-center items-center h-[25vh] font-Yeseva w-full tracking-[2px] pointer-events-none">
        <div className="text-[40px] text-white z-[99]">humblefool13</div>
      </div>
      <div className="homepage-container w-screen h-[90vh] flex z-0 justify-center items-center">
        <CanvasComponent />
      </div>
    </div>
  );
};

export default Homepage;
