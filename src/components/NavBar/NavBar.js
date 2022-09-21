import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'

import '../../style.css'
import './NavBar.css'

///Navigation bar on the top of the site
const NavBar = () => {

  //opens link
  const open = (url) => {
    window.open(url, "_self", "noopener,noreferrer");
  };

  // Change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 5) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? "nav-bg" : null}>
      <img
        className="website-logo"
        alt=""
        src={require("../../assets/images/website/website-logo.png")}
        onClick={() => open("./")}
      />
      <div className="navbar-text">
        <Button
          className="rounded-pill btn-sm"
          variant="link"
          to="/pathLink#yourAnchorTag"
        >
          {" "}
          All projects{" "}
        </Button>
        <Button
          className="rounded-pill btn-sm"
          variant="link"
          onClick={() => open("./")}
        >
          {" "}
          About me{" "}
        </Button>
      </div>
    </nav>
  );
}

export default NavBar;