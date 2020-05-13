import React, { useState, useEffect } from "react";

import "./Slider.css";

// Desktop Banners

import banner1 from "../../assets/bg-banner.png";
import banner2 from "../../assets/bg-banner-2.png";
import banner3 from "../../assets/bg-banner-3.png";

// Movile banners

// import ipad1 from "../../assets/bg-ipad.png";
// import ipad2 from "../../assets/bg-ipad-2.png";

export default function Slider() {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((slide) => slide + 1);

      if (slide === 3) {
        setSlide(1);
      }
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, [slide]);

  return (
    <>
      <div className="Slider desktop">
        {slide === 1 && (
          <img
            src={banner1}
            alt="slide"
            className=" animate__animated animate__bounce slower "
          />
        )}
        {slide === 2 && (
          <img
            src={banner2}
            alt="slide"
            className=" animate__animated animate__slideInRight faster"
          />
        )}
        {slide === 3 && (
          <img
            src={banner3}
            alt="slide"
            className=" animate__animated animate__slideInRight faster"
          />
        )}

        <ul>
          <li onClick={() => setSlide(1)}></li>
          <li onClick={() => setSlide(2)}></li>
          <li onClick={() => setSlide(3)}></li>
        </ul>
      </div>

      {/* <div className="Slider mobile">
        {slide === 1 && (
          <img
            src={ipad1}
            alt="slide"
            className="animate__animated animate__bounce slower "
          />
        )}
        {slide === 2 && (
          <img
            src={ipad2}
            alt="slide"
            className="animate__animated animate__slideInRight faster"
          />
        )}
        <ul>
          <li onClick={() => setSlide(1)}></li>
          <li onClick={() => setSlide(2)}></li>
        </ul>
      </div> */}
    </>
  );
}
