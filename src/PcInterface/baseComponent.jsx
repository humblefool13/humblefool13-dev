import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topbar from "./topbar";
import Bottombar from "./bottombar";

import Homepage from "./homepage";

const BaseComponent = () => {
  return (
    <div className="base-component-pc">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/skills" element={<SnapShots />} />
        <Route path="/experience" element={<ChangesPage />} />
        <Route path="/contact" element={<Bots />} /> */}
        </Routes>
        <Bottombar />
      </Router>
    </div>
  );
};

export default BaseComponent;
