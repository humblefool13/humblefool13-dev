import { useEffect } from "react";

import IPhoneFace from "./iPhoneFace";

const BaseComponent = () => {
  useEffect(() => {
    const containerWidth = window.innerWidth;
    const containerHeight = containerWidth * 1.875;
    document.querySelector(".iphone-container").style.height = `${
      containerHeight > window.innerHeight
        ? window.innerHeight
        : containerHeight
    }px`;
  });

  return (
    <div className="base-component-iphone">
      <div className="iphone-container">
        <IPhoneFace />
      </div>
    </div>
  );
};

export default BaseComponent;
