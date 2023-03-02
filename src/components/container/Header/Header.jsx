import React from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/images/Frame.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Header = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);

  const fadeInStyle = {
    opacity: fadeIn ? 1 : 0,
    color: "red",
    transition: "opacity 500ms linear",
  };
  return (
    <div className={classes.header_wrapper}>
      <div className={classes.logo_section}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <ul>
          <li>Life insurance</li>
          <li>Why Bello</li>
          <li>Help</li>
        </ul>
      </div>
      <div className={classes.btn_wrap}>
        <Link to="login">
          <p>Log in</p>
        </Link>
        <button style={fadeInStyle}>Get my price</button>
      </div>
    </div>
  );
};

export default Header;
