import React from "react";
import komas from "../assets/images/svg/quates.svg";
import Slider from "react-slick";
const SeeWhat = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,

          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,

          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="py-lg-5 py-3 position-relative overflow_hidden">
      <div className="blue_box_slider position-absolute"></div>
      <div className="green_box_slider position-absolute"></div>
      <div className="custom_container pt-xl-5 py-5">
        <div className="text-center">
          {/* <img src={leftarrow} alt="leftarrow" className=" c_pointer" /> */}
          <p className=" ff_Segoe fw-semibold fs_7xl color_black">
            See what our users say{" "}
          </p>
        </div>
        <Slider data-aos="fade-up" {...settings} className="py-5 h-100">
          <div className="">
            <div className=" bg-white box_padding  b_radius_10 h-100 ms-md-4 max_h_321">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="
                d-flex"
                >
                  <div className="green_slider_crcle ff_Segoe fw-semibold fs_md color_green bg_light_green">
                    RC
                  </div>
                  <div className="ms-4 ps-2">
                    <p className="mb-0 ff_Segoe fw-semibold fs_xl color_black">
                      Richard Chung
                    </p>
                    <p className=" ff_Segoe fw-normal fs_xsm color_black opacity_7">
                      Killer Williams
                    </p>
                  </div>
                </div>
                <img className=" d-none d-sm-block" src={komas} alt="komas" />
              </div>
              <p className=" ff_Segoe fw-normal fs_md color_black opacity_7 mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The 'Content here, content here', making it look like readable
                English.
              </p>
            </div>
          </div>
          <div className=" ">
            <div className=" bg-white box_padding h-100 b_radius_10 ms-md-4">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="
                d-flex"
                >
                  <div className="green_slider_crcle ff_Segoe fw-semibold fs_md color_green bg_light_green">
                    PM
                  </div>
                  <div className="ms-4 ps-2">
                    <p className="mb-0 ff_Segoe fw-semibold fs_xl color_black">
                      Paul Morris
                    </p>
                    <p className=" ff_Segoe fw-normal fs_xsm color_black opacity_7">
                      CEO of KW Forward Living KW Regianal
                    </p>
                  </div>
                </div>
                <img className=" d-none d-sm-block" src={komas} alt="komas" />
              </div>
              <p className=" ff_Segoe fw-normal fs_md color_black opacity_7 mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Point making it look like readable English.
              </p>
            </div>
          </div>
          <div className=" ">
            <div className=" bg-white box_padding  h-100 b_radius_10 ms-md-4">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="
                d-flex"
                >
                  <div className="green_slider_crcle ff_Segoe fw-semibold fs_md color_green bg_light_green">
                    RC
                  </div>
                  <div className="ms-4 ps-2">
                    <p className="mb-0 ff_Segoe fw-semibold fs_xl color_black">
                      Richard Chung
                    </p>
                    <p className=" ff_Segoe fw-normal fs_xsm color_black opacity_7">
                      Killer Williams
                    </p>
                  </div>
                </div>
                <img className=" d-none d-sm-block" src={komas} alt="komas" />
              </div>
              <p className=" ff_Segoe fw-normal fs_md color_black opacity_7 mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The 'Content here, content here', making it look like readable
                English.
              </p>
            </div>
          </div>
          <div className="">
            <div className=" bg-white box_padding  h-100 b_radius_10 ms-md-4">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="
                d-flex"
                >
                  <div className="green_slider_crcle ff_Segoe fw-semibold fs_md color_green bg_light_green">
                    PM
                  </div>
                  <div className="ms-4 ps-2">
                    <p className="mb-0 ff_Segoe fw-semibold fs_xl color_black">
                      Paul Morris
                    </p>
                    <p className=" ff_Segoe fw-normal fs_xsm color_black opacity_7">
                      CEO of KW Forward Living KW Regianal
                    </p>
                  </div>
                </div>
                <img className=" d-none d-sm-block" src={komas} alt="komas" />
              </div>
              <p className=" ff_Segoe fw-normal fs_md color_black opacity_7 mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Point making it look like readable English.
              </p>
            </div>
          </div>
          <div className=" ">
            <div className=" bg-white box_padding  h-100 b_radius_10 ms-md-4">
              <div className="d-flex align-items-center justify-content-between">
                <div
                  className="
                d-flex"
                >
                  <div className="green_slider_crcle ff_Segoe fw-semibold fs_md color_green bg_light_green">
                    PM
                  </div>
                  <div className="ms-4 ps-2">
                    <p className="mb-0 ff_Segoe fw-semibold fs_xl color_black">
                      Paul Morris
                    </p>
                    <p className=" ff_Segoe fw-normal fs_xsm color_black opacity_7">
                      CEO of KW Forward Living KW Regianal
                    </p>
                  </div>
                </div>
                <img className=" d-none d-sm-block" src={komas} alt="komas" />
              </div>
              <p className=" ff_Segoe fw-normal fs_md color_black opacity_7 mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Point making it look like readable English.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default SeeWhat;
