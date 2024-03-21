import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../assets/menu.png";
import Cross from "../assets/cross.png";
import Resume from "../assets/resume.pdf";

const NavigationMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  function openResume() {
    window.open(Resume, "_blank");
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function hide() {
    setShowMenu(false);
  }

  return (
    <>
      <div className="z-[100] font-Yeseva">
        {showMenu ? (
          <>
            <img
              className="fixed w-[45px] h-[45px] right-1 top-1 z-[150]"
              src={Cross}
              alt="Cross Icon"
              onClick={toggleMenu}
            />
          </>
        ) : (
          <>
            <img
              className="fixed w-[30px] h-[30px] right-3 top-3 z-[150]"
              src={Menu}
              alt="Menu Icon"
              onClick={toggleMenu}
            />
          </>
        )}
        <div
          className={`z-[120] fixed top-0 left-0 ${
            !showMenu ? "hidden" : "inline"
          } w-screen h-screen backdrop-blur-[90px] flex flex-col justify-center items-center text-[20px]`}
        >
          <Link
            className="header-link no-underline py-[20px]"
            to="/"
            onClick={hide}
          >
            About Me
          </Link>
          <Link
            className="header-link no-underline py-[20px]"
            to="/skills"
            onClick={hide}
          >
            Skills
          </Link>
          <Link
            className="header-link no-underline py-[20px]"
            to="/experience"
            onClick={hide}
          >
            Experience
          </Link>
          <Link
            className="header-link no-underline py-[20px]"
            onClick={openResume}
          >
            Resume
          </Link>
          <Link
            className="header-link no-underline py-[20px]"
            to="/contact"
            onClick={hide}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;
