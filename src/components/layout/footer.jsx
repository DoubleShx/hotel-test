import { CButton } from "@coreui/react";
import React from "react";
import { Link } from "react-router-dom";
export const PageFooter = () => {
  return (
    <footer class="mastfoot pb-5 bg-white section-padding pb-0">
      <div class="inner container">
        <div class="row">
          <div class="col-lg-8 d-flex">
            <div class="footer-widget pr-lg-5 pr-0">
              <img
                src="assets/img/logo.png"
                class="img-fluid footer-logo mb-3"
                alt=""
              />
            </div>
          </div>

          <div class="col-lg-4 d-flex top_button_wrapper">
            <button
              className="scroll_top_button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // for smoothly scrolling
                })
              }
            ><img src="assets/scroll.png"/></button>
          </div>
        </div>
      </div>
    </footer>
  );
};
