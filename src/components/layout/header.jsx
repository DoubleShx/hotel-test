import React, { useEffect, useState } from "react";
import { httpGet } from "../../api";
import { Link, useLocation } from "react-router-dom";
import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem
} from "@coreui/react";

export default function Header(props) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    httpGet({
      url: "/booking-details",
      params: {
        adults_number: "1",
        checkin_date: "2022-03-26",
        locale: "ru_RU",
        currency: "USD",
        hotel_id: "363464",
        checkout_date: "2022-03-30",
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CNavbar id="navbar-header" expand="lg" colorScheme="light" className="navbar navbar-expand-lg">
      <CContainer fluid>
        <CNavbarBrand href="#">
          <Link
            className="navbar-brand navbar-brand-center d-flex align-items-center p-0 only-mobile"
            to="/"
          >
            <img src="assets/img/logo.png" alt="" />
          </Link>
        </CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse justify-content-center" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              <Link
                className={`nav-link ${
                  location.pathname.includes("/room") ? "active" : ""
                }`}
                to="/rooms"
              >
                Номера
              </Link>
            </CNavItem>
            <CNavItem>
              <Link
                className={`nav-link ${
                  location.pathname.includes("/meeting_room") ? "active" : ""
                }`}
                to="/meeting_rooms"
              >
                Конференц Залы
              </Link>
            </CNavItem>
            <CNavItem> 
            <CNavbarBrand href="#" className="d-flex">
          <Link
            className="navbar-brand navbar-brand-center d-flex-lg align-items-center only-desktop"
            to="/"
          >
            <img src="assets/img/logo.png" alt="" />
          </Link>
        </CNavbarBrand>
            </CNavItem>

            <CNavItem>
              <Link
                className={`nav-link ${
                  location.pathname.includes("/contacts") ? "active" : ""
                }`}
                to="/contacts"
              >
                Контакты
              </Link>
            </CNavItem>

            <CNavItem>
              <Link
                className={`nav-link ${
                  location.pathname.includes("/reservation") ? "active" : ""
                }`}
                to="/reservation"
              >
                Зарезервировать
              </Link>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
}
