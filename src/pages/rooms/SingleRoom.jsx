import React from 'react'
import { Link } from 'react-router-dom';
import { sliderData } from "../../data/HomePageData";

export const SingleRoom = () => {
  return (
    <section id="single_room" class="bg-white section-padding">
      <div class="container">
        <div class="section-content">
          <div class="heading-section text-center">
            <span class="subheading">Hotel</span>
            <h2>Номера</h2>
          </div>
          <div class="row">
            {sliderData.rooms.map((item) => (
              <div class="col-md-6">
                <Link to={{ pathname: `/room/${item.id}`, id: item.id }}>
                <div class="item-card mb-5">
                    <span className="item-price"><p>{item.price}</p></span>
                  <img class="img-fluid" src={item.src} alt="" />
                  <div class="item-desc">
                    <h4 class="mb-0">{item.content_text}</h4>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
