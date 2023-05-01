import React from "react";
import { Col, Row } from "react-bootstrap";
import blackhera from "../assets/images/svg/blackdimond.svg";
import Blackspot from "../assets/images/svg/Blackspot.svg";
import Blackmoney from "../assets/images/svg/Blackmoney.svg";
import blackparsentages from "../assets/images/svg/blackparsentages.svg";
import doller_img from "../assets/images/png/doller_img.png";
import arrow from "../assets/images/svg/arrow.svg";
import eye from "../assets/images/png/eyes.png";
import circle_triangle from "../assets/images/png/circle_triangle.png";
import notepad from "../assets/images/png/noteoad.png";
const OurPlatform = () => {
  return (
    <section>
      <div className="custom_container pt-lg-5 ">
        <Row className=" py-lg-5">
          <Col lg={3} className=" py-1">
            <div className=" text-center text-lg-start mb-4 mb-lg-0">
              <h3 className=" ff_Segoe fw-semibold color_black fs_7xl">
                Our Platform
              </h3>
            </div>
          </Col>
          <Col lg={9} className=" py-1">
            <Row>
              <Col data-aos="fade-right" sm={6} className="px-1">
                <div className=" platform_boxes c_pointer hover_scale p-5">
                  <div className=" pb-5 mt-2 d-flex justify-content-between align-items-center">
                    <p className=" ff_Segoe fw-semibold color_black fs_xl mb-0">
                      Exclusive
                    </p>{" "}
                    <img src={blackhera} alt="blackhera" />
                  </div>
                  <div>
                    <p className="mb-0 ff_Segoe fw-normal fs_md color_black opacity_7 pt-5 mt-5 pe-lg-5 me-lg-5">
                      200 exclusive prospects pushed to your platfrom monthly.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={6} data-aos="fade-left" className="px-1 pt-4 pt-sm-0">
                <div className=" platform_boxes c_pointer hover_scale h-100 p-5 d-flex flex-column justify-content-between">
                  <div className=" pb-5 mt-2 d-flex justify-content-between align-items-center">
                    <p className=" ff_Segoe fw-semibold color_black fs_xl mb-0 ">
                      In your backyard
                    </p>{" "}
                    <img src={Blackspot} alt="Blackspot" />
                  </div>
                  <div>
                    <p className="mb-0 pt-5 pt-sm-0 mt-5 mt-sm-0 ff_Segoe fw-normal fs_md color_black opacity_7 ">
                      Radius based leads within 50-miles from you, prioritizing
                      those closer to you.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={9} className=" py-1">
            <Row>
              <Col data-aos="fade-right" sm={6} className="px-1 mt-3 mt-sm-0">
                <div className=" platform_boxes p-5 c_pointer hover_scale">
                  <div className=" pb-5 mt-2 d-flex justify-content-between align-items-center">
                    <p className=" ff_Segoe fw-semibold color_black fs_xl mb-0">
                      High net worth
                    </p>{" "}
                    <img src={Blackmoney} alt="Blackmoney" />
                  </div>
                  <div>
                    <p className="mb-0 ff_Segoe fw-normal fs_md color_black opacity_7 pt-5 mt-5 pe-lg-5 me-lg-5">
                      Average investable assets of $1.5 million.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={6} className="px-1 mt-4 mt-sm-0 c_pointer hover_scale">
                <div className=" platform_boxes h-100 p-5 d-flex flex-column justify-content-between">
                  <div className=" pb-5 mt-2 d-flex justify-content-between align-items-center">
                    <p className=" ff_Segoe fw-semibold color_black fs_xl mb-0 ">
                      High propensity
                    </p>{" "}
                    <img src={blackparsentages} alt="blackparsentages" />
                  </div>
                  <div>
                    <p className="mb-0 ff_Segoe fw-normal mt-sm-0 mt-5 fs_md color_black opacity_7 ">
                      Our combination of event-driven data, historical data,
                      behavioral analytics, and real-time data results in the
                      highest propensity prospects.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            data-aos="fade-left"
            lg={3}
            sm={6}
            md={4}
            xs={11}
            className=" m-auto py-1 px-1 "
          >
            <div className=" position-relative h-100 c_pointer hover_scale  ">
              <img
                className=" w-100 h-100 "
                src={doller_img}
                alt="doller_img"
              />
              <p className=" ff_Segoe fw-semibold color_white fs_md  position-absolute doller_img_pera_position  px-4 ">
                View pricing
              </p>{" "}
              <img
                className="doller_img_position position-absolute px-4 "
                src={arrow}
                alt="arrow"
              />
            </div>
          </Col>
        </Row>
        <Row className=" justify-content-center py-sm-5 mb-lg-5">
          <Col data-aos="fade-right" lg={4} sm={6} className=" my-4">
            <div className="text-center">
              <img src={eye} alt="eye" />{" "}
              <p className=" mb-0 mt-2 ff_Segoe fw-normal fs_md color_black">
                Harness the power of 30 million data points to reach your
                highest converting target market
              </p>
            </div>
          </Col>{" "}
          <Col data-aos="fade-up" lg={4} sm={6} className=" my-4">
            <div className="text-center">
              <img src={circle_triangle} alt="circle_triangle" />{" "}
              <p className=" mb-0 mt-2 ff_Segoe fw-normal fs_md color_black">
                Increase your marketingdollars
              </p>
              <p className=" mb-0  ff_Segoe fw-normal fs_md color_black">
                {" "}
                ROI
              </p>
            </div>
          </Col>{" "}
          <Col data-aos="fade-left" lg={4} sm={6} className=" my-4">
            <div className="text-center">
              <img src={notepad} alt="notepad" />{" "}
              <p className=" mt-2 mb-0 ff_Segoe fw-normal fs_md color_black">
                A top of funnel marketing solution to fill your prospect
                pipeline
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OurPlatform;
