import React from "react";
import Header from "../../container/Header/Header";
import classes from "./Main.module.scss";
import arrow from "../../assets/images/Shape.svg";
import hero from "../../assets/images/hero 1.svg";
import { Link } from "react-router-dom";
import Slick from "../../container/Slick/Slick";
import useLocalStorage from 'use-local-storage'

const Main = () => {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <div>
      <Header />
      {/* banner section */}
      <div className={classes.banner_section} data-theme={theme}>
        <div className={classes.banner_left_side}>
          <p>MEET BELLO</p>
          <p>A new kind of life insurance</p>
          <p>
            Secure your family's financial future, in as little as 10 minutes.
          </p>
          <Link to="chart">
          <button>
            Get my price
            <img src={arrow} alt=""/>
          </button>
          </Link>
        </div>
        <div className={classes.img_wrap}>
          <img src={hero} alt="" />
        </div>
      </div>
      <Slick/>
    </div>
  );
};

export default Main;
