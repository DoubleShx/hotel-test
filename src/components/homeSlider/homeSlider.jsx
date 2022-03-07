import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import { slickSliderSettings, sliderData } from "../../data/PrepareData";

export const HomeSlider = (props) => {
  const { type } = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const beforeChange = (current, next) => setActiveSlide(next);
  const afterChange = (current) => setActiveSlide(current);
  return (
    <div id={type} class="row mt-5">
      <div class="heading-section text-center">
        <span class="subheading">Hotel</span>
        <h2>{type === "rooms" ? "Номера" : "Конференц залы"}</h2>
      </div>
      <div>
        <Slider
          {...{ ...slickSliderSettings, beforeChange, afterChange }}
          className="rooms-slider"
        >
          {sliderData[type].map((item) => (
            <div>
              <img src={item.src} alt={item.id} loading="lazy" />
            </div>
          ))}
        </Slider>
        <div className="slider_text">
          <h4 className="text-primary mt-3">
            {sliderData[type][activeSlide].content_text}
          </h4>
          <NavLink to={{ pathname: `/${type.slice(0, -1)}/${+activeSlide+1}`, id: +activeSlide+1 }}>
          <button className="btn btn-primary slider_link-button mt-3">
            Подробнее
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
