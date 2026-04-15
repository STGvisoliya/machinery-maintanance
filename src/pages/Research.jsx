import React, { useState } from "react";

import rh from "../assets/rh.jpg";
import ups from "../assets/ups.jpg";
import cryo from "../assets/cryo.jpg";

function Research() {

  const data = [
    { img: rh, title: "RH CALIBRATOR", desc: "Humidity calibration system" },
    { img: ups, title: "ONLINE UPS SYSTEM", desc: "Advanced UPS system" },
    { img: cryo, title: "CRYOTEM", desc: "Temperature calibration equipment" }
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="research-section">

      <h1 className="research-title">Research & Development</h1>

      <div className="research-container">

        <button className="arrow left" onClick={prevSlide}>❮</button>

        <div className="research-slider">
          <div
            className="research-track"
            style={{
              transform: `translateX(-${index * 33.33}%)`
            }}
          >
            {[...data, ...data].map((item, i) => (
              <div className="research-card" key={i}>
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>❯</button>

      </div>
    </div>
  );
}

export default Research;