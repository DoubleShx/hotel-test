import {
  CCarousel,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import React from "react";
import { HomeSlider } from "../../components/homeSlider/homeSlider";
import { RestaurantMenu } from "../../components/Menu/menu";

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

      <section
        id="gtco-reservation"
        class="bg-fixed bg-white section-padding overlay reservation_bg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="section-content bg-white p-5 shadow">
                <div class="heading-section text-center">
                  <span class="subheading">Reservation</span>
                  <h2>Book Now</h2>
                </div>
                <form method="post" name="contact-us" action="">
                  <div class="row">
                    <div class="col-md-12 form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div class="col-md-12 form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="col-md-12 form-group">
                      <input
                        type="number"
                        class="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone"
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <div
                        class="input-group date"
                        id="datetimepicker4"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          class="form-control datetimepicker-input"
                          data-target="#datetimepicker4"
                          placeholder="Date"
                        />
                        <div
                          class="input-group-append"
                          data-target="#datetimepicker4"
                          data-toggle="datetimepicker"
                        >
                          <div class="input-group-text">
                            <span class="lnr lnr-calendar-full"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 form-group">
                      <div
                        class="input-group date"
                        id="datetimepicker3"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          class="form-control datetimepicker-input"
                          data-target="#datetimepicker3"
                          placeholder="Time"
                        />
                        <div
                          class="input-group-append"
                          data-target="#datetimepicker3"
                          data-toggle="datetimepicker"
                        >
                          <div class="input-group-text">
                            <span class="lnr lnr-clock"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12 form-group">
                      <select class="form-control" id="selectPerson">
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>

                    <div class="col-md-12 form-group">
                      <textarea
                        class="form-control"
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Your Message ..."
                      ></textarea>
                    </div>
                    <div class="col-md-12 text-center">
                      <button
                        class="btn btn-primary btn-shadow btn-lg"
                        type="submit"
                        name="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
