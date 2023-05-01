import React from "react";
import { Col, Row } from "react-bootstrap";
import earth from "../assets/images/svg/earth.svg";
import map from "../assets/images/png/MAP.png";
const TargetMarket = () => {
  return (
    <section>
      <div className="custom_container">
        <Row className=" justify-content-lg-between align-items-center pb-md-5 flex-column-reverse flex-md-row justify-content-center">
          <Col data-aos="fade-right" lg={5} md={6}>
            <div className=" text-center text-md-start">
              <h3 className=" ff_Segoe fw-semibold fs_7xl color_black">
                Your Target Market
              </h3>
              <p className="mb-0 mt-3 ff_Segoe fw-normal fs_md color_black">
                {" "}
                <img className="earth_rotate" src={earth} alt="earth" />{" "}
                Nationwide coverage
              </p>
              <p className=" mb-0 ff_Segoe fw-normal fs_md color_black opacity_7 mt-2 mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <button className=" m-0 ff_Segoe fw-normal fs_md color_white header_btn  ">
                Get started
              </button>
            </div>
          </Col>
          <Col data-aos="fade-left" lg={5} md={6} sm={10}>
            {" "}
            <div className=" my-4 pt-4">
              {" "}
              <img className=" w-100" src={map} alt="map" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TargetMarket;
