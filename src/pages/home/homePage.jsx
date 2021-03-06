import {
  CCarousel,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import React from "react";
import { HomeSlider } from "../../components/homeSlider/homeSlider";
import { RestaurantMenu } from "../../components/Menu/menu";
import { Reservation } from "../../components/reservation/reservation";

function HomePage() {

  return (
    <>
      <div class="hero">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6 hero-left">
              <h1 class="display-4 mb-5">
                Мы Ценим <br />
                Комфорт и удобство!
              </h1>
              <div class="mb-2">
                <a
                  class="btn btn-primary btn-shadow btn-lg m-2"
                  href="#rooms"
                  role="button"
                >
                  Посмотреть номера
                </a>
                <a
                  class="btn btn-primary btn-shadow btn-lg m-2"
                  href="#meeting_rooms"
                >
                  <span class="lnr lnr-film-play"></span>
                  Конференц залы
                </a>
              </div>

              <ul class="home_page_main-services">
                <li class="border-right">
                  <img src="assets/icons/sofa.png" alt="room" />
                  <h5>Номера</h5>
                </li>
                <li class="border-right">
                  <img src="assets/icons/meeting.png" alt="meeting" />
                  <h5>Конференции</h5>
                </li>
                <li class="">
                  <img src="assets/icons/restaurant.png" alt="restaurant" />
                  <h5>Рестораны</h5>
                </li>
              </ul>
            </div>
            <CCarousel
              controls
              class="col-lg-6 hero-right hero-carousel"
              transition="crossfade"
              dark
            >
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src="assets/img/hero-1.jpg"
                  alt="slide 3"
                />
              </CCarouselItem>
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src="assets/img/hero-2.jpg"
                  alt="slide 3"
                />
              </CCarouselItem>
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src="assets/img/hero-3.jpg"
                  alt="slide 3"
                />
              </CCarouselItem>
            </CCarousel>
          </div>
        </div>
      </div>
      <section id="gtco-welcome" class="bg-white section-padding">
        <div class="container">
          <div class="section-content">
            <div class="row">
              <div class="col-sm-5 img-bg d-flex shadow align-items-center justify-content-center justify-content-md-end img-2 about_bg"></div>
              <div class="col-sm-7 py-5 pl-md-0 pl-4">
                <div class="heading-section pl-lg-5 ml-md-5">
                  <span class="subheading">О Нас</span>
                  <h2>Добро пожаловать в наш Отель</h2>
                </div>
                <div class="pl-lg-5 ml-md-5">
                  <p>
                    Если вы решили остаться с нами, вы будете наслаждаться
                    современным домашним комфортом в традиционной обстановке.
                    Если Вы ищете место для проведения выходных или длительного
                    отпуска, мы предлагаем широкий выбор пакетов с лучшими
                    ценами. Наслаждайтесь своей отдыхом, а мы сделаем все
                    остальное. Наш отель ведет работу 24 часа в сутки, то есть
                    придя в Наш отель вы будете довольны нашим сервисом в любое
                    время.
                  </p>
                  <div class="row">
                    <div class="col-4">
                      <img
                        class="img-fluid img-cover"
                        src="assets/img/hotel-2.jpg"
                        alt="hotel"
                      />
                    </div>
                    <div class="col-4">
                      <img
                        class="img-fluid img-cover"
                        src="assets/img/hotel-3.jpg"
                        alt="hotel"
                      />
                    </div>
                    <div class="col-4">
                      <img
                        class="img-fluid img-cover"
                        src="assets/img/hotel-4.jpg"
                        alt="hotel"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gtco-special-dishes" class="bg-grey section-padding">
        <div class="">
          <div class="section-content" id="section_content">
            <HomeSlider type="rooms" />
            <HomeSlider type="meeting_rooms" />
          </div>
        </div>
      </section>



    <RestaurantMenu />

    <Reservation/>
    </>
  );
}

export default HomePage;
