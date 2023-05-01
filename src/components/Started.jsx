import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import change_img_1 from "../assets/images/png/changes_1.png";
import change_img_2 from "../assets/images/png/changes_2.png";
import change_img_3 from "../assets/images/png/changes_3.png";
import change_img_4 from "../assets/images/png/changes_4.png";
import Accordion from "react-bootstrap/Accordion";
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    let settings = {
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,

            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
    };

    return (
      <section className=" pb-xl-5 overflow-hidden position-relative z_3 ">
        <div className="custom_container_2">
          <div className="br_15 sec_5_bg  py-lg-5">
            {" "}
            <div className="custom_container py-4">
              <p className=" ff_Segoe fw-semibold fs_7xl color_white text-center">
                How to get started?
              </p>
              <Row className=" justify-content-lg-between py-5 justify-content-center">
                <Col data-aos="fade-down" lg={7} className=" px- 1">
                  <div className="">
                    <Slider
                      className=""
                      asNavFor={this.state.nav1}
                      ref={(slider) => (this.slider2 = slider)}
                      slidesToShow={4}
                      swipeToSlide={true}
                      focusOnSelect={true}
                      arrows={false}
                      autoplay={true}
                      autoplaySpeed={4000}
                      {...settings}
                      vertical={true}
                    >
                      {/* 1 */}
                      <Accordion className="">
                        <div className=" pe-xl-4">
                          <div className=" sec_4_boxes p-3 me_20">
                            <div className="d-flex align-items-start ">
                              <p className="sec_4_no_modify  mb-0 ff_Segoe px-3 fw-semibold fs_md color_white ">
                                1
                              </p>
                              <Accordion.Item
                                eventKey="0"
                                className="w-100 ps-3 ps-lg-5 "
                              >
                                <Accordion.Header className="">
                                  Provide your information
                                </Accordion.Header>
                                <Accordion.Body>
                                  <p className=" mt_2 pe-lg-5">
                                    {" "}
                                    Provide a zip code and we will provide you
                                    with the highest propensity prospects in a
                                    50 mile radius.
                                  </p>
                                </Accordion.Body>
                              </Accordion.Item>
                            </div>
                          </div>
                        </div>
                      </Accordion>
                      <Accordion>
                        <div className=" pe-xl-4">
                          <div className=" sec_4_boxes p-3 me_20">
                            {/* <p className=" mt-2 ff_Segoe fw-semibold fs_md color_white">
                          Big <br /> Data
                        </p> */}
                            <div className="d-flex align-items-start">
                              <p className="sec_4_no_modify px-3  mb-0 ff_Segoe fw-semibold fs_md color_white bg_lght_blue">
                                2
                              </p>
                              <Accordion.Item
                                eventKey="0"
                                className="w-100 ps-3 ps-lg-5"
                              >
                                <Accordion.Header>
                                  Select your location
                                </Accordion.Header>
                                <Accordion.Body>
                                  <p className="mb-0 pe-lg-5">
                                    {" "}
                                    Provide a zip code and we will provide you
                                    with the highest propensity prospects in a
                                    50 mile radius.
                                  </p>
                                </Accordion.Body>
                              </Accordion.Item>
                            </div>
                          </div>
                        </div>
                      </Accordion>
                      <Accordion>
                        <div className=" pe-xl-4">
                          <div className=" sec_4_boxes p-3 me_20">
                            {/* <p className=" mt-2 ff_Segoe fw-semibold fs_md color_white">
                          Big <br /> Data
                        </p> */}
                            <div className="d-flex align-items-start">
                              <p className="sec_4_no_modify px-3  mb-0 ff_Segoe fw-semibold fs_md color_white bg_lght_blue">
                                3
                              </p>
                              <Accordion.Item
                                eventKey="0"
                                className="w-100 ps-3 ps-lg-5"
                              >
                                <Accordion.Header>
                                  Purchase your subscription
                                </Accordion.Header>
                                <Accordion.Body>
                                  <p className="mb-0 pe-lg-5">
                                    {" "}
                                    Provide a zip code and we will provide you
                                    with the highest propensity prospects in a
                                    50 mile radius.
                                  </p>
                                </Accordion.Body>
                              </Accordion.Item>
                            </div>
                          </div>
                        </div>
                      </Accordion>
                      <Accordion>
                        <div className=" pe-xl-4">
                          <div className=" sec_4_boxes p-3 me_20">
                            {/* <p className=" mt-2 ff_Segoe fw-semibold fs_md color_white">
                          Big <br /> Data
                        </p> */}
                            <div className="d-flex align-items-start">
                              <p className="sec_4_no_modify px-3  mb-0 ff_Segoe fw-semibold fs_md color_white bg_lght_blue">
                                4
                              </p>
                              <Accordion.Item
                                eventKey="0"
                                className="w-100 ps-3 ps-lg-5"
                              >
                                <Accordion.Header>
                                  Access your dashboard
                                </Accordion.Header>
                                <Accordion.Body>
                                  <p className="mb-0 pe-lg-5">
                                    {" "}
                                    Provide a zip code and we will provide you
                                    with the highest propensity prospects in a
                                    50 mile radius.
                                  </p>
                                </Accordion.Body>
                              </Accordion.Item>
                            </div>
                          </div>
                        </div>
                      </Accordion>
                    </Slider>
                  </div>
                </Col>
                <Col
                  data-aos="fade-up"
                  lg={5}
                  md={6}
                  sm={10}
                  className="mt-4 mt-lg-0 ps-xl-5  "
                >
                  <Slider
                    className=""
                    arrows={false}
                    asNavFor={this.state.nav2}
                    ref={(slider) => (this.slider1 = slider)}
                  >
                    <img
                      src={change_img_1}
                      alt="change_img_1"
                      className="w-100 h-100"
                    />
                    <img
                      src={change_img_2}
                      alt="change_img_2"
                      className="w-100 h-100"
                    />
                    <img
                      src={change_img_3}
                      alt="change_img_3"
                      className="w-100 h-100"
                    />
                    <img
                      src={change_img_4}
                      alt="change_img_4"
                      className="w-100 h-100"
                    />
                  </Slider>
                  <div className="d-flex flex-sm-row flex-column align-items-center mt-4 pt-2 justify-content-between ">
                    {" "}
                    <button className=" ff_Segoe fw-normal fs_md color_white header_btn me-0  ">
                      Sign up
                    </button>
                    <p className=" ff_Segoe fw-normal fs_md color_dark mb-0 mt-3 mt-sm-0">
                      Register in under 5 minutes.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
