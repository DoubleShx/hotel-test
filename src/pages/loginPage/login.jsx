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
import Cookies from "universal-cookie";
import { Notyf } from "notyf";
import axios from "axios";
import { useNavigate } from 'react-router';

function LoginPage() {
  const [formsData, setFormsData] = useState({
    email: { value: "email@gmail.com", changed: false },
    password: { value: "Root_123", changed: false },
    formSubmitted: false,
  });
  let navigate = useNavigate();
  

  const inputFormChange = (e) => {
    setFormsData({
      ...formsData,
      [e.target.name]: { changed: true, value: e.target.value },
    });
  };

  const onSubmitForm = (e) => {
    // e.preventDefault();
    // const cookies = new Cookies()
    // const notyf = new Notyf()
    // setFormsData({...formsData, formSubmitted: true})
    e.preventDefault();
    const cookies = new Cookies();
    const notyf = new Notyf();
    axios
      .post("http://3.209.97.189:8090/api/auth/v1/web/sign-in", {
        email: formsData.email.value,
        password: formsData.password.value,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("response", response.data.data);
          cookies.set("access_token", response.data.data.accessToken, {
            path: "/",
          });
          cookies.set("refresh_token", response.data.data.refreshToken, {
            path: "/",
          });
          notyf.success("Вы успешно вошли в систему");
        }
        navigate('/pushnotifications')
      })
      .catch((error) => {
        console.log(error);
        notyf.error("Ошибка");
      });
  };

  return (
    <div className="content_side login_page">
      {/* <BreadCrumbs
        pageHistory={[
          { name: "test", link: "#" },
          { name: "login", link: "/login" },
        ]}
      /> */}
      <CCardBody className="content_body">
        <CCardHeader>
          <CompanyInfo />
          <span className="website_info">Admin Panel</span>
        </CCardHeader>
        <CRow className="main_content_row d-flex align-middle justify-content-center">
          <form className="login_form">
            <CInputGroup className="">
              <CCol className="form_group_wrapper">
                <label htmlFor="email">Email</label>
                <CFormInput
                  id="email"
                  name="email"
                  type="email"
                  className={`${
                    !formsData.formSubmitted ? "not_sumbitted" : ""
                  }`}
                  placeholder="*field is required"
                  onChange={inputFormChange}
                  onClick={() => console.log("test", formsData)}
                  value={formsData.email.value}
                  required
                />
              </CCol>
            </CInputGroup>
            <CInputGroup className="">
              <CCol className="form_group_wrapper">
                <label htmlFor="password">Password</label>
                <CFormInput
                  id="password"
                  name="password"
                  type="password"
                  className={`${
                    !formsData.formSubmitted ? "not_sumbitted" : ""
                  }`}
                  placeholder="*field is required"
                  onChange={inputFormChange}
                  value={formsData.password.value}
                  required
                />
              </CCol>
            </CInputGroup>
            <CButton
              onClick={onSubmitForm}
              color="primary"
              className="login_submit_button"
            >
              Login
            </CButton>
            <a href="/login" className="password_recover_link">
              Forgot your password?
            </a>
          </form>
        </CRow>
      </CCardBody>
    </div>
  );
}

export default LoginPage;
