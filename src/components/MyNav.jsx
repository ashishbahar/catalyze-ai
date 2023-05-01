import React, { useState } from "react";
import pagelogo from "../assets/images/svg/pagelogo.svg";
import fina from "../assets/images/svg/fini.svg";
import logout from "../assets/images/svg/logout.svg";
import real from "../assets/images/svg/real.svg";
import cross from "../assets/images/svg/cross.svg";
const MyNav = () => {
  const [btn, setbtn] = useState(2);
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <nav className=" nav_modify  m-3  position-relative z_index5">
      <div className="custom_container">
        <div className="d-flex justify-content-between align-items-center">
          <ul className=" mb-0 ps-0 d-flex align-items-center">
            <li className="me-3">
              <a href="#">
                <img src={pagelogo} alt="pagelogo" />
              </a>
            </li>
            <li className=" ms-4 ps-5 d-lg-block d-none">
              <a
                href="#"
                className=" ff_Segoe fs_md fw-semibold color_black nav_link_hover"
              >
                <img className=" mb-2 me-2" src={fina} alt="fina" /> Financial
                Services
              </a>
            </li>
            <li className=" ms-4 ps-4 d-lg-block d-none ">
              <a
                href="#"
                className=" ff_Segoe fs_md fw-semibold color_black nav_link_hover"
              >
                <img className=" mb-2 me-2" src={real} alt="realestate" />
                Real Estate
              </a>
            </li>
          </ul>

          <div
            className={
              first
                ? "d-flex align-items-center flex-column flex-lg-row mobile_ul gap-4 gap-lg-0 hide"
                : "d-flex align-items-center flex-column flex-lg-row mobile_ul gap-4 gap-lg-0 show "
            }
          >
            <div className=" d-lg-none text-center  ">
              <img
                onClick={() => {
                  setfirst(true);
                }}
                className=" cross_position"
                src={cross}
                alt=" cross"
              />
              <li className=" mb-4">
                <a
                  onClick={() => {
                    setfirst(true);
                  }}
                  href="#"
                  className=" ff_Segoe fs_md fw-semibold color_black nav_link_hover"
                >
                  <img
                    className=" mb-2 me-2"
                    src={fina}
                    alt="financialservices"
                  />
                  Financial Services
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    setfirst(true);
                  }}
                  href="#"
                  className="  ff_Segoe fs_md fw-semibold color_black nav_link_hover"
                >
                  <img className=" mb-2 me-2" src={real} alt="realestate" />
                  Real Estate
                </a>
              </li>
            </div>
            <button
              onClick={() => {
                setbtn(1);
                setfirst(true);
              }}
              className={
                btn === 1
                  ? "ff_Segoe fs_md fw-semibold color_green nav_btn_modify border_green "
                  : "ff_Segoe fs_md fw-semibold color_green nav_btn_modify "
              }
            >
              Sign up
            </button>
            <button
              onClick={() => {
                setbtn(2);
                setfirst(true);
              }}
              className={
                btn === 2
                  ? "ff_Segoe fs_md fw-semibold color_green nav_btn_modify border_green ms-lg-3  "
                  : "ff_Segoe fs_md fw-semibold color_green nav_btn_modify ms-lg-3  "
              }
            >
              Log in <img className=" ms-2" src={logout} alt="logout" />
            </button>
          </div>
          <div
            onClick={() => {
              setfirst(false);
            }}
            className="menuicon d-lg-none "
          >
            <div className="line"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
