import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../AppPhone.css";

import NavigationMenu from "./navigationMenu";
import Homepage from "./homepage";
import SkillsPage from "./skills";
import ContactPage from "./contact";
import ExperiencePage from "./experience";
import BottomBar from "./bottombar";

const BaseComponent = () => {
  return (
    <div className="base-component-phone min-h-screen w-screen bg-[#0f0e13] flex flex-col overflow-hidden">
      <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
        <BottomBar />
      </Router>
    </div>
  );
};

export default BaseComponent;
