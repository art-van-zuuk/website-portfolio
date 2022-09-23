import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useLocation } from "react-router-dom"

import HandleURL from "../../scripts/HandleURL";
import '../../style.css'
import './NavBar.css'

///Navigation bar on the top of the site
const NavBar = (props) => {


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
        onClick={() => HandleURL("/")}
      />
      <div className="navbar-text">
        <Button
          className="hover-button rounded-pill btn-sm"
          variant="link"
          onClick={() => HandleURL("/")}
        >
          {" "}
          All projects{" "}
        </Button>
      </div>
    </nav>
  );
}

export default NavBar;