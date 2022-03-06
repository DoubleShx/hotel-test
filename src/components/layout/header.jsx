import React, { useEffect } from "react";
import { httpGet } from "../../api";
import { Link } from "react-router-dom";

export default function Header(props) {
  useEffect(() => {
    httpGet({
      url: '/booking-details',
      params: {
        adults_number: '1',
        checkin_date: '2022-03-26',
        locale: 'ru_RU',
        currency: 'USD',
        hotel_id: '363464',
        checkout_date: '2022-03-30'
      },
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }, [])
  
  return (
    <nav id="navbar-header" class="navbar navbar-expand-lg">
      <div class="container">
        <Link
          class="navbar-brand navbar-brand-center d-flex align-items-center p-0 only-mobile"
          to="/"
        >
          <img src="assets/img/logo.png" alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="lnr lnr-menu"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav d-flex justify-content-between">
            <li class="nav-item only-desktop">
              <a class="nav-link" id="side-nav-open" href="#">
                <span class="lnr lnr-menu"></span>
              </a>
            </li>
            <div class="d-flex flex-lg-row flex-column">
              <li class="nav-item">
                <Link class="nav-link" to="/rooms">
                  Номера
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/meeting_rooms">
                  Конференц Залы
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/rooms">
                  Контакты
                </Link>
              </li>

            </div>
          </ul>

          <a
            class="navbar-brand navbar-brand-center d-flex align-items-center only-desktop"
            href="#"
          >
            <img src="assets/img/logo.png" alt="" />
          </a>
          <ul class="navbar-nav d-flex justify-content-between">
            <div class="d-flex flex-lg-row flex-column">
              <li class="nav-item active">
                <a class="nav-link" href="menu.html">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="team.html">
                  Team
                </a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link" href="reservation.html">
                  Reservation
                </a>
              </li>
            </div>
            <li class="nav-item">
              <a id="side-search-open" class="nav-link" href="#">
                <span class="lnr lnr-magnifier"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
