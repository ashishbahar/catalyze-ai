import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import no1 from "../assets/images/svg/no1.svg";
import no2 from "../assets/images/svg/no2.svg";
import no3 from "../assets/images/svg/no3.svg";
import no4 from "../assets/images/svg/no4.svg";
import bigdata2 from "../assets/images/png/imagessss.png";
import bigdata1 from "../assets/images/png/sec_4_img_1.png";
import bigdata3 from "../assets/images/png/sec_4_img_3.png";
import bigdata4 from "../assets/images/png/sec_4_img_4.png";
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
            centerPadding: "40px",
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerPadding: "40px",
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
    };
    return (
      <section className=" ">
        <div className="custom_container_2 py-5 overflow-hidden">
          <Row className=" ">
            <Col data-aos="fade-down" lg={9} className=" px-1">
              <div className="ps-md-5 ps-3 sec_5_bg pt-5">
                <Slider
                  className=" pt-5 ps-xl-5 ms-xl-5 "
                  asNavFor={this.state.nav1}
                  ref={(slider) => (this.slider2 = slider)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  arrows={false}
                  autoplay={true}
                  autoplaySpeed={4000}
                  {...settings}
                >
                  <div className=" pe-xl-4">
                    {" "}
                    <div className=" sec_4_boxes p-3 ">
                      <img className="sec_4_no_modify" src={no1} alt="no1" />
                      <p className=" mt-2 ff_Segoe fw-semibold fs_md color_white">
                        Big <br /> Data
                      </p>
                    </div>
                  </div>
                  <div className=" pe-xl-4">
                    {" "}
                    <div className=" sec_4_boxes p-3 ">
                      <img className="sec_4_no_modify" src={no2} alt="no1" />
                      <p className=" mt-2 ff_Segoe fw-semibold fs_md color_white">
                        Event- <br /> Driven
                      </p>
                    </div>
                  </div>
                  <div className=" pe-xl-4">
                    {" "}
                    <div className=" sec_4_boxes p-3 ">
                      <img className="sec_4_no_modify" src={no3} alt="no1" />
                      <p className=" mt-2 ff_Segoe fw-semibold fs_md color_white">
                        Artificial <br /> Intelligence
                      </p>
                    </div>
                  </div>
                  <div className=" pe-xl-4">
                    {" "}
                    <div className=" sec_4_boxes p-3 ">
                      <img className="sec_4_no_modify" src={no4} alt="no1" />
                      <p className=" mt-2 ff_Segoe fw-semibold fs_md color_white">
                        Predictive <br /> Analytics
                      </p>
                    </div>
                  </div>
                </Slider>
                <Slider
                  arrows={false}
                  className=" py-5 pe-lg-5 me-lg-5 me-3    ps-xl-5 ms-xl-5"
                  asNavFor={this.state.nav2}
                  ref={(slider) => (this.slider1 = slider)}
                >
                  <div className=" my-lg-5   ">
                    <Row className=" w-100 py-3 m-0 big_box   justify-content-between align-items-center">
                      <Col sm={5}>
                        {" "}
                        <img className="w-100" src={bigdata1} alt="bigdata1" />
                      </Col>{" "}
                      <Col sm={5}>
                        {" "}
                        <p className=" ff_Segoe fw-semibold fs_xl color_white">
                          Big Data
                        </p>
                        <p className=" ff_Segoe fw-semibold fs_xsm pe-lg-5 color_white">
                          We gather hundreds of millions of data points in order
                          to perform advanced analytics to identify the highest
                          propensity prospects
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div className=" my-lg-5">
                    <Row className="big_box w-100 py-3 m-0  justify-content-between align-items-center">
                      <Col sm={5}>
                        {" "}
                        <img className="w-100" src={bigdata2} alt="bigdata2" />
                      </Col>{" "}
                      <Col sm={5}>
                        {" "}
                        <p className=" ff_Segoe fw-semibold fs_xl color_white">
                          Big Data
                        </p>
                        <p className=" ff_Segoe fw-semibold fs_xsm pe-lg-5 color_white">
                          We gather hundreds of millions of data points in order
                          to perform advanced analytics to identify the highest
                          propensity prospects
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div className=" my-lg-5">
                    <Row className="big_box w-100 py-3 m-0  justify-content-between align-items-center">
                      <Col sm={5}>
                        {" "}
                        <img className="w-100" src={bigdata3} alt="bigdata3" />
                      </Col>{" "}
                      <Col sm={5}>
                        {" "}
                        <p className=" ff_Segoe fw-semibold fs_xl color_white">
                          Big Data
                        </p>
                        <p className=" ff_Segoe fw-semibold fs_xsm pe-lg-5 color_white">
                          We gather hundreds of millions of data points in order
                          to perform advanced analytics to identify the highest
                          propensity prospects
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div className=" my-lg-5">
                    <Row className="big_box w-100 py-3 m-0  justify-content-between align-items-center">
                      <Col sm={5}>
                        {" "}
                        <img className="w-100" src={bigdata4} alt="bigdata4" />
                      </Col>{" "}
                      <Col sm={5}>
                        {" "}
                        <p className=" ff_Segoe fw-semibold fs_xl color_white">
                          Big Data
                        </p>
                        <p className=" ff_Segoe fw-semibold fs_xsm pe-lg-5 color_white">
                          We gather hundreds of millions of data points in order
                          to perform advanced analytics to identify the highest
                          propensity prospects
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Slider>
              </div>
            </Col>
            <Col data-aos="fade-up" lg={3} className=" px-1 pt-4 pt-lg-0">
              <div
                className=" sec_5_bg p-xl-5 p-3  h-100 d-flex flex-column
               justify-content-between align-items-center align-items-lg-start  "
              >
                <p className="mb-0 ff_Segoe fw-semibold mt-4 fs_6xl color_white">
                  Our approach
                </p>
                <div className="text-center text-lg-start">
                  <p className=" mb-0 ff_Segoe fw-normal fs_6xl color_white">
                    200k<span className=" fs_3xl">Properties</span>
                  </p>
                  <p className=" mb-0 ff_Segoe fw-normal fs_md color_white py-3 ">
                    of wealth will be transitioned in the next 25 years.
                  </p>
                  <button className="header_btn ff_Segoe fw-normal fs_md color_white m-0 mb-lg-5 ">
                    Sign up
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
