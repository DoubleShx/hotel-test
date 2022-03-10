import React from "react";
import { ContactForm } from "../../pages/contacts/contactForm";

export const Reservation = () => {
  return (
    <section
      id="gtco-reservation"
      class="bg-fixed bg-white section-padding overlay reservation_bg"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="section-content bg-white p-5 shadow">
              <div class="heading-section text-center">
                <span class="subheading">Обратная связь</span>
                <h2>Связитесь с нами</h2>
              </div>
            <ContactForm/>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
