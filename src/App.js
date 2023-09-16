import { useState, useEffect } from "react";

import "./App.css";
import "./media.css";

import WindowsBaseComponent from "./windowsInterface/baseComponent";
import IphoneBaseComponent from "./iphoneInterface/baseComponent";

function App() {
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

  return (
    <div className="App">
      {screenWidth >= 480 ? <WindowsBaseComponent /> : <IphoneBaseComponent />}
    </div>
  );
}

export default App;
