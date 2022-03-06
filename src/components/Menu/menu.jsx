import React from 'react'
import { CRow } from "@coreui/react";
import { menuData } from "../../data/PrepareData";

export const RestaurantMenu = () => {
  return (
    <>
      <section id="gtco-menu" class="section-padding">
        <div class="container">
          <div class="section-content">
            <div class="row mb-5">
              <div class="col-md-12">
                <div class="heading-section text-center">
                  <span class="subheading">Рестораны</span>
                  <h2>Наше меню</h2>
                </div>
              </div>
            </div>
            <CRow>
              {menuData.map((item) => (
                <div class="menus d-flex align-items-center col-lg-4">
                  <div class="menu-img rounded-circle">
                    <img class="img-fluid" src={item.src} alt="" />
                  </div>
                  <div class="text-wrap">
                    <div class="row align-items-start">
                      <div class="col-8">
                        <h4>{item.name}</h4>
                      </div>
                      <div class="col-4">
                        <h4 class="text-muted menu-price">$30</h4>
                      </div>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </CRow>
          </div>
        </div>
      </section>

      <section id="gtco-special-dishes" class="bg-grey section-padding">
        <div class="container">
          <div class="section-content">
            <div class="heading-section text-center">
              <span class="subheading">Специальные предложения</span>
              <h2>Блюда дня</h2>
            </div>
            <div class="row mt-5">
              <div class="col-lg-5 col-md-6 align-self-center py-5">
                <h2 class="special-number">01.</h2>
                <div class="dishes-text">
                  <h3>
                    <span>Говяжий</span>
                    <br /> Стейк с кровью
                  </h3>
                  <p class="pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate, ea vero alias perferendis quas animi doloribus
                    voluptates. Atque explicabo ea nesciunt provident libero qui
                    eum, corporis esse quos excepturi soluta?
                  </p>
                  <h3 class="special-dishes-price">$15.00</h3>
                  <a href="#" class="btn-primary mt-3">
                    Заказать
                  </a>
                </div>
              </div>
              <div class="col-lg-5 offset-lg-2 col-md-6 align-self-center mt-4 mt-md-0">
                <img
                  src="assets/img/steak.jpg"
                  alt=""
                  class="img-fluid shadow w-100"
                />
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-lg-5 col-md-6 align-self-center order-2 order-md-1 mt-4 mt-md-0">
                <img
                  src="assets/img/salmon-zucchini.jpg"
                  alt=""
                  class="img-fluid shadow w-100"
                />
              </div>
              <div class="col-lg-5 offset-lg-2 col-md-6 align-self-center order-1 order-md-2 py-5">
                <h2 class="special-number">02.</h2>
                <div class="dishes-text">
                  <h3>
                    <span>Лосось</span>
                    <br />
                    Цуккини
                  </h3>
                  <p class="pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis, accusamus culpa quam amet ipsam odit ea
                    doloremque accusantium quo, itaque possimus eius. In a quis
                    quibusdam omnis atque vero dolores!
                  </p>
                  <h3 class="special-dishes-price">$12.00</h3>
                  <a href="#" class="btn-primary mt-3">
                    Заказать
                    <span>
                      <i class="fa fa-long-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
