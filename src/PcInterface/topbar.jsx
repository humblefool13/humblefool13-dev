import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../assets/menu.png";
import Cross from "../assets/cross.png";

const Topbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function downloadResume() {}

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function hide() {
    setShowMenu(false);
  }

  return (
    <>
      <div className="header-component-pc font-Yeseva hidden md:inline lg:text-[20px] xl:text-[25px] md:text-[18px] 2xl:text-[30px] py-[10px] z-[100] bg-[#0f0e13]">
        <div className="max-w-[1536px] header-list m-auto w-4/5 flex flex-row justify-around items-center">
          <Link className="header-link no-underline" to="/">
            About Me
          </Link>
          <Link className="header-link no-underline" to="/skills">
            Skills
          </Link>
          <Link className="header-link no-underline" to="/experience">
            Experience
          </Link>
          <Link className="header-link no-underline" onClick={downloadResume}>
            Resume
          </Link>
          <Link className="header-link no-underline" to="/contact">
            Contact
          </Link>
        </div>
        <hr className="footer-rule m-auto bg-gray-700 w-[95%]"></hr>
      </div>
      <div className="md:invisible z-[100] font-Yeseva">
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
            onClick={downloadResume}
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

export default Topbar;
