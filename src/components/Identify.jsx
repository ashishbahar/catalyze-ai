import React from "react";
import { Col, Row } from "react-bootstrap";
import img_1 from "../assets/images/png/sec_2_1_img.png";
import img_2 from "../assets/images/png/sec_2_2_img.png";
import img_3 from "../assets/images/png/sec_2_3_img.png";

const Identify = () => {
  return (
    <>
      <section className=" bg_white position-relative pb-lg-5  ">
        <div className=" sec_2_blue_circle"></div>
        <div className=" sec_2_green_circle"></div>
        <div className=" custom_container pt-lg-5 pt-5 border_bottom pb-5 ">
          <h2 className=" ff_Segoe fw-semibold position-relative z_index5 pb-md-5 fs_7xl pt-lg-5  color_black text-center sec_2pera m-auto">
            Identify Inherited Properties in your local area that will sell
          </h2>

          <Row className=" justify-content-lg-between justify-content-center mt-sm-5 pt-sm-5 pt-4">
            <Col
              data-aos="zoom-in"
              sm={6}
              lg={3}
              className=" position-relative"
            >
              <p className="  pera_position ff_Segoe fw-normal text-center m-auto fs_xl color_black  max_width_pera  ">
                Industry High Prediction Rate
              </p>
              <div className=" text-center">
                <div className=" ">
                  <p className="  text-center ff_Segoe fw-semibold fs_5xl color_black">
                    40%
                  </p>{" "}
                  <img
                    className=" max_width_261 w-100  mt-4"
                    src={img_1}
                    alt="img1"
                  />{" "}
                  <p className=" text-center  ff_Segoe fw-normal fs_md color_black mt-sm-5 pt-3">
                    Roughly 4 out of 10 property leads sell within 12 months.
                  </p>
                </div>
              </div>
            </Col>
            <Col data-aos="zoom-in" sm={6} lg={3}>
              <div className=" text-center mt-3 mt-sm-0 ">
                {" "}
                <p className=" ff_Segoe fw-semibold fs_5xl color_black">
                  $77
                  <span className=" ff_Segoe fw-normal fs_4xl color_black">
                    Bn
                  </span>
                </p>{" "}
                <img
                  className=" max_width_261 w-100 mt-sm-4 "
                  src={img_2}
                  alt="img_2"
                />
                <p className="  ff_Segoe fw-normal fs_md color_black mt-sm-5 pt-sm-2 pt-3">
                  Predicted total property value that will sell per year.
                </p>
              </div>
            </Col>
            <Col data-aos="zoom-in" lg={3} sm={6}>
              <div className=" text-center mt-3 mt-sm-0">
                <p className=" ff_Segoe fw-semibold mb-1 fs_5xl color_black">
                  77%
                </p>
                <img className=" max_width_261 w-100" src={img_3} alt="img3" />
                <p className="  ff_Segoe fw-normal fs_md color_black mt-sm-5 pt-3 pt-sm-0 ">
                  Of recent seller contacted only one agent before finding the
                  right agent they worked with to sell their home.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Identify;
