import React from 'react'
import Slider from "react-slick/lib/slider";
import { slickSliderSettings, sliderData } from "../../data/HomePageData";

export const HomeSlider = (props) => {
  const { type } = props;

  return (
    <div id={type} class="row mt-5">
      <div class="heading-section text-center">
        <span class="subheading">Hotel</span>
        <h2>{type === 'rooms' ? 'Номера' : "Конференц залы"}</h2>
      </div>
      <div>
        <Slider {...slickSliderSettings} className="rooms-slider">
          {sliderData[type].map((item) => (
            <div>
              <img src={item.src} alt={item.id} />

              <div className="slider_text">
                <button className="btn btn-primary slider_link-button">
                  Подробнее
                </button>
                <h5>{item.content_text}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
