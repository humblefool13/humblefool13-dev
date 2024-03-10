import { useState, useEffect } from "react";

import PcInterface from "./PcInterface/baseComponent";
import PhoneInterface from "./PhoneInterface/baseComponent";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      {screenWidth >= 640 && screenHeight < screenWidth ? (
        <PcInterface />
      ) : (
        <PhoneInterface />
      )}
    </div>
  );
}

export default App;
