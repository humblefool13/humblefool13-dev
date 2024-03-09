import { Link } from "react-router-dom";

const Topbar = () => {
  function downloadResume() {}

  return (
    <div className="header-component-pc font-Yeseva text-[25px] py-[10px] z-[100] bg-[#0f0e13]">
      <div className="max-w-[1536px] header-list m-auto w-4/5 flex flex-row justify-around items-center">
        <Link className="header-link text-[22px] no-underline" to="/">
          About Me
        </Link>
        <Link className="header-link text-[22px] no-underline" to="/skills">
          Skills
        </Link>
        <Link className="header-link text-[22px] no-underline" to="/experience">
          Experience
        </Link>
        <Link
          className="header-link text-[22px] no-underline"
          onClick={downloadResume}
        >
          Resume
        </Link>
        <Link className="header-link text-[22px] no-underline" to="/contact">
          Contact
        </Link>
      </div>
      <hr className="footer-rule m-auto bg-gray-700 w-[95%]"></hr>
    </div>
  );
};

export default Topbar;
