import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topbar from "./topbar";
import Bottombar from "./bottombar";
import Homepage from "./homepage";
import SkillsPage from "./skillspage";
import ExperiencePage from "./experience";
import ContactPage from "./contact";

const BaseComponent = () => {
  return (
    <div className="base-component-pc min-h-screen bg-[#0f0e13] flex flex-col overflow-hidden">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
        <Bottombar />
      </Router>
    </div>
  );
};

export default BaseComponent;
