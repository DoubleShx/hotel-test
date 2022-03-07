import React from "react";
import { ContactForm } from "./contactForm";
import YandexMap from "./yandexMap";

export const Contacts = () => {
  return (
    <div className="contacts_page-wrapper">
      <section id="single_room" class="bg-white section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12 title-wrapper">
              <div class="title-single-box">
                <h1 class="title-single">Контакты</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact">
        <h3 className="text-primary">Мы будем рады новым Знакомствам</h3>
        <div class="container">
          <div class="row">  
            <div class="col-sm-12 contact_form-wrapper">
              <div class="row">
                <div class="col-md-7">
                  <ContactForm />
                </div>
                <div class="col-md-5 section-md-t3">
                  <div class="icon-box section-b2">
                    <div class="icon-box-icon">
                      <span class="ion-ios-paper-plane"></span>
                    </div>
                    <div class="icon-box-content table-cell">
                      <div class="icon-box-title">
                        <h4 class="icon-title">Контакты</h4>
                      </div>
                      <div class="icon-box-content">
                        <p class="mb-1">
                          Email.
                          <span class="color-a">contact@example.com</span>
                        </p>
                        <p class="mb-1">
                          Тел:
                          <span class="color-a">+54 356 945234</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="icon-box section-b2">
                    <div class="icon-box-icon">
                      <span class="ion-ios-pin"></span>
                    </div>
                    <div class="icon-box-content table-cell">
                      <div class="icon-box-title">
                        <h4 class="icon-title">Адрес</h4>
                      </div>
                      <div class="icon-box-content">
                        <p class="mb-1">
                        ул. Чаплыгина, 111, Новосибирск, 
                          <br /> Новосибирская обл., Россия.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 mt-5">
              <YandexMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
