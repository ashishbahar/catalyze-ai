import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import footer_logo from "../assets/images/svg/footer_logo.svg";
const Footer = () => {
  const [first, setfirst] = useState(0);
  return (
    <footer>
      <div className="custom_container_2  ">
        <div className="footer_bg pb-4 mb-2 mt-5 mt-md-0 ">
          <div className="footer_border_bottom">
            <div className="custom_container">
              <Row className=" py-md-5 py-4 w-100 px-sm-3 ps-2 px-md-0  justify-content-lg-between justify-content-center">
                <Col lg={9} xl={7} md={6} className=" py-5 ">
                  <Row className="">
                    <Col lg={7} className="px-2">
                      <div>
                        <input
                          className="w-100 footer_input ff_Segoe fw-semibold fs_md color_white opacity_7"
                          type="text"
                          placeholder="Name"
                        />
                        <input
                          className="w-100 footer_input ff_Segoe fw-semibold fs_md color_white opacity_7 mt-2"
                          type="Email"
                          placeholder="Email"
                        />
                        <div className=" d-flex mt-2  flex-column flex-sm-row align-items-center">
                          <button
                            onClick={() => {
                              setfirst(0);
                            }}
                            className={
                              first === 0
                                ? "w_50 w_100 footer_btn ff_Segoe fw-semibold   fs_md me-1 color_white opacity_7  onclick_color_boder_change "
                                : " w_50 w_100 footer_btn ff_Segoe fw-semibold   fs_md me-1 color_white opacity_7 "
                            }
                          >
                            <span
                              className={
                                first === 0
                                  ? "onclick_circle bg_and_border_change"
                                  : "onclick_circle "
                              }
                            ></span>
                            Financial Services
                          </button>
                          <button
                            onClick={() => {
                              setfirst(1);
                            }}
                            className={
                              first === 1
                                ? "w_50 w_100 footer_btn ff_Segoe fw-semibold my-3  my-sm-0  fs_md ms-sm-1 color_white opacity_7  onclick_color_boder_change "
                                : "w_50 w_100 footer_btn ff_Segoe fw-semibold  my-3  my-sm-0 fs_md ms-sm-1 color_white opacity_7 "
                            }
                          >
                            <span
                              className={
                                first === 1
                                  ? "onclick_circle bg_and_border_change"
                                  : "onclick_circle "
                              }
                            ></span>
                            Real Estate
                          </button>
                        </div>
                      </div>
                    </Col>
                    <Col lg={5} className="px-1 mt-lg-0 mt-3  ">
                      <textarea
                        className="w-100  ff_Segoe fw-semibold fs_md color_white opacity_7 footer_textarea"
                        placeholder="Message.. "
                      ></textarea>
                      <button className=" ff_Segoe fw-normal fs_md color_white header_btn w-100 py_13 mt-1  ">
                        Submit
                      </button>
                    </Col>
                  </Row>
                </Col>
                <Col lg={3} xl={4} className=" py-sm-5 ">
                  <div className=" text-center text-lg-start">
                    <p className=" mb-0 fs_5xl color_white ff_Segoe fw-semibold ">
                      Contact us
                    </p>
                    <p className=" mb-0 ff_Segoe fw-normal fs_md color_white opacity_7">
                      Our Predictive Analytics utilize a combination of
                      event-driven data, historical data.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <div className="custom_container">
              <Row>
                <Col lg={4} className=" pt-5 pb-md-5">
                  <div>
                    <img
                      className=" c_pointer"
                      src={footer_logo}
                      alt="footer_logo"
                    />
                    ;
                    <li className=" mt-2 ">
                      <a
                        href="#"
                        className=" footer_link_hover ff_Segoe fw-semibold fs_md color_white"
                      >
                        info@catalyzeai.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" ff_Segoe fw-semibold footer_link_hover fs_md color_white"
                      >
                        (941) 867-1761
                      </a>
                    </li>
                  </div>
                </Col>
                <Col lg={6} className="py-5 d-flex justify-content-between">
                  <ul className="p-0 m-0">
                    <li className=" ff_Segoe fw-semibold fs_md color_white">
                      Financial Services
                    </li>
                    <li className=" mt-3">
                      <a
                        href="#"
                        className=" footer_text_hover ff_Segoe fw-normal fs_md color_white"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className=" mt-2 pt-1">
                      <a
                        href="#"
                        className=" footer_text_hover ff_Segoe fw-normal fs_md color_white"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                  <ul className="p-0 m-0">
                    <li className=" ff_Segoe fw-semibold fs_md color_white">
                      Real Estate
                    </li>
                    <li className=" mt-3">
                      <a
                        href="#"
                        className=" footer_text_hover ff_Segoe fw-normal fs_md color_white"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className=" mt-2 pt-1">
                      <a
                        href="#"
                        className=" footer_text_hover ff_Segoe fw-normal fs_md color_white"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                  <ul className="p-0 m-0">
                    <li className=" ff_Segoe fw-semibold fs_md color_white">
                      LinkedIn
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row className=" justify-content-between">
                <Col xl={6} lg={6} md={7} sm={12} className="pb-3 pt-3">
                  <p className="mb-0 ff_Segoe fw-normal fs_xsm color_white opacity_7 text-center mb-4 d-sm-none">
                    All rights reserved.©20022 Catalyze AI
                  </p>
                  <div className="d-flex justify-content-sm-between justify-content-center ">
                    <p className="mb-0 ff_Segoe fw-normal fs_xsm color_white opacity_7 d-none d-sm-block">
                      All rights reserved.©20022 Catalyze AI
                    </p>
                    <p className="mb-0 c_pointer t d-inline ff_Segoe fw-normal fs_xsm color_white opacity_7 border_bottom px-2">
                      Do not sell my data
                    </p>
                  </div>
                </Col>
                <Col xl={3} lg={5} md={5} sm={12} className="pb-3 pt-3">
                  <div className="d-flex justify-content-between">
                    <p className="mb-0 c_pointer ff_Segoe fw-normal fs_xsm color_white opacity_7 border_bottom px-2">
                      Terms & Conditions
                    </p>{" "}
                    <p className="mb-0 c_pointer ff_Segoe fw-normal fs_xsm color_white opacity_7 border_bottom px-2">
                      Privacy Policy
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
