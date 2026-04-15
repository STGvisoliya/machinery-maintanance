import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/hero1.png";
import img2 from "../assets/hero2.png";
import img3 from "../assets/hero3.png";

function Hero() {

  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="hero-wrapper">

      {/* SLIDER */}
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="hero-slide" key={index}>
            <img src={img} alt="Hero" />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay">
        <h1 data-aos="fade-up">Industrial Machinery Experts</h1>

        <p data-aos="fade-up" data-aos-delay="300">
          Serving Gurgaon, Manesar & NCR Region
        </p>

        <NavLink
          to="/book"
          className="btn btn-warning mt-3"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Book Service Now
        </NavLink>
      </div>

      {/* DOTS */}
      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

    </div>
  );
}

export default Hero;
