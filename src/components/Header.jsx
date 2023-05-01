import React from "react";
import MyNav from "./MyNav";
import { Col, Row } from "react-bootstrap";
import plybtn from "../assets/images/svg/plybtn.svg";
import header_img from "../assets/images/svg/header_img.svg";
import overview from "../assets/images/svg/overview.svg";
import page from "../assets/images/svg/page.svg";
import search from "../assets/images/svg/search.svg";

const Header = () => {
  return (
    <header className="position-relative bg_white   ">
      <MyNav />
      <div className="green_circle_header"></div>
      <div className="custom_container pb-lg-5 border_bottom">
        <Row className=" flex-column-reverse flex-lg-row pb-lg-5 mb-lg-5">
          <Col data-aos="zoom-in" lg={6}>
            <div className=" pe-lg-5 mt-lg-5 mt-4 mb-4 text-center text-lg-start">
              <h1 className=" ff_Segoe fw-semibold color_black fs_9xl ">
                Event-Driven Listing Leads
              </h1>
              <p className=" ff_Segoe mt-2 fw-normal mb-0 color_black fs_md me-lg-5">
                Not your average smart farming, not statistical analysis, but
                actionable behaviors.
              </p>
              <div className="d-flex flex-column flex-sm-row  align-items-center pt-4 mt-lg-5 justify-content-center justify-content-lg-start">
                <button className=" ff_Segoe fw-normal fs_md color_white header_btn  ">
                  Get started
                </button>

                <a
                  href="#"
                  className=" plybtn_hover py-1  ff_Segoe fw-semibold fs_md color_green mt-4 mt-sm-0"
                >
                  {" "}
                  Book a demo{" "}
                  <img
                    className=" ms-2  rotate "
                    src={plybtn}
                    alt="plybtn"
                  />{" "}
                </a>
              </div>
            </div>
          </Col>
          <Col data-aos="zoom-in" lg={6} md={8} sm={10} className=" m-auto">
            <div className="text-end mt-lg-5 position-relative">
              {" "}
              <img className="w-100" src={header_img} alt="header_img" />
              <img
                className="position-absolute overview_position"
                src={overview}
                alt="overview"
              />
              <img
                className=" position-absolute page_position"
                src={page}
                alt="page"
              />
              <img
                className=" position-absolute search_position"
                src={search}
                alt="search"
              />
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
