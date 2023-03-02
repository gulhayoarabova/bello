import React from "react";
import Slider from "react-slick";
import classes from "./Slick.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../assets/images/arrow.svg"
const Slick = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  const slick_items = [
    {
      id: 1,
      title: "Calculator",
      button: "Calculate Coverage",
      parag: "How much life insurance do I need?",
      color: "#A9D8FF",
    },
    {
      id: 2,
      title: "Term vs. perm",
      button: "See the winner",
      parag: "Term vs. whole life insurance",
      color: "#FFAE68",
    },
    {
      id: 3,
      title: "Pricing",
      button: "Tell me more",
      parag: "How much does life insurance cost?",
      color: "#FA5240",
    },
    {
      id: 4,
      title: "Insurance 101",
      button: "Become an expert",
      parag: "The ultimate guide to life insurance.",
      color: "#126F85",
    },
    {
      id: 5,
      title: "Term vs. perm",
      button: "See the winner",
      parag: "Term vs. whole life insurance",
      color: "#F46752",
    },
    {
      id: 6,
      title: "Pricing",
      button: "Tell me more",
      parag: "How much life insurance do I need?",
      color: "#F9F5F2",
    },
  ];

  return (
    <div className={classes.slick_wrapper}>
      <Slider {...settings}>
        {slick_items.map((item) => (
        <div>
          <div className={classes.slide} key={item.id}>
            <p>{item.title}</p>
            <p>{item.parag}</p>
            <button>{item.button}

                <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
