import { Link } from "react-router-dom";

const Topbar = () => {
  function downloadResume() {}

  return (
    <div className="header-component-pc">
      <div className="header-list">
        <Link className="header-link" to="/">
          About Me
        </Link>
        <Link className="header-link" to="/skills">
          Skills
        </Link>
        <Link className="header-link" to="/experience">
          Experience
        </Link>
        <Link className="header-link" onClick={downloadResume}>
          Resume
        </Link>
        <Link className="header-link" to="/contact">
          Contact
        </Link>
      </div>
      <hr className="footer-rule"></hr>
    </div>
  );
};

export default Topbar;
