import React from "react";
import { Col, Row } from "react-bootstrap";
import home from "../assets/images/png/home.png";
import constrined from "../assets/images/svg/constrained.svg";
import plybtn from "../assets/images/svg/plybtn.svg";
const CloseMoreDeals = () => {
  return (
    <section className=" bg_off_white">
      <div className="custom_container py-lg-5">
        <Row className=" justify-content-lg-between justify-content-center py-lg-5 my-lg-5 align-items-center">
          <Col data-aos="fade-right" lg={4} sm={6} className="">
            <img className="w-100" src={home} alt="home" />
          </Col>
          <Col lg={3} md={6} data-aos="fade-up">
            <div className=" text-center text-md-start">
              <p className=" mt-4 mb-0 px-4 ff_Segoe fw-normal fs_md color_black">
                Leverage big data and artificial intelligence to identify your
                next Client
              </p>
              <p className=" mb-0 px-4  pt-lg-3 pb-4 ff_Segoe fw-normal fs_md color_black my-4 opacity_7">
                Compliment your current business development with Unconstrained
                predictive analytics.
              </p>{" "}
              <img src={constrined} alt="constrined" />
            </div>
          </Col>
          <Col
            lg={2}
            md={12}
            data-aos="fade-left"
            className=" text-center pb-3 pb-lg-0"
          >
            <p className=" mb-lg-5 mt-4 mt-lg-0 pb-lg-5 pb-0 ff_Segoe fw-semibold fs_7xl color_black">
              Close More Deals
            </p>
            <a
              href="#"
              className=" plybtn_hover py-1  ff_Segoe fw-semibold fs_md color_green mt-4 mt-sm-0"
            >
              {" "}
              Book a demo{" "}
              <img className=" ms-2  rotate " src={plybtn} alt="plybtn" />{" "}
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CloseMoreDeals;
