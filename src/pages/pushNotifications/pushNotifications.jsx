import {
  CButton,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CRow,
} from "@coreui/react";
import { useState } from "react";
import { CompanyInfo } from "../../components/companyInfo";
import { BreadCrumbs } from "../../components/breadcrumbs";

function PushNotifications() {
  const [details, setDetails] = useState([])
  


  return (
    <div className="content_side pushnotifications_page">
      <BreadCrumbs
        pageHistory={[
          { name: "test", link: "#" },
          { name: "login", link: "/login" },
        ]}
      />
      <CCardBody className="content_body">
        <CCardHeader>
          <CompanyInfo />
          <span className="website_info">Admin Panel</span>
        </CCardHeader>
        <CRow className="main_content_row d-flex align-middle justify-content-center">

        </CRow>
      </CCardBody>
    </div>
  );
}

export default PushNotifications;
