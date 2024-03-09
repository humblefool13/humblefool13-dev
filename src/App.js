import { useState, useEffect } from "react";

import PcInterface from "./PcInterface/baseComponent";
import PhoneInterface from "./PhoneInterface/baseComponent";

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
      {screenWidth >= 480 ? <PcInterface /> : <PhoneInterface />}
    </div>
  );
}

export default App;
