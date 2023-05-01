import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import sec_3_img from "../assets/images/svg/sec_3_img.svg";
import videoplayer from "../assets/images/svg/videoplayer.svg";
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className=" position-relative">
      <div className="sec_3_green_circle"></div>
      <div className="sec_3_blue_circle"></div>
      <div className="custom_container my-lg-5 py-4 ">
        {" "}
        <div data-aos="flip-left"
          onClick={handleShow}
          className=" py-5 mb-5 max_width_946 m-auto c_pointer position-relative sec_3_bg_img video_hover "
        >
          {" "}
          <div className="  text-center w-100 ">
            <p className=" ff_Segoe fw-semibold fs_8xl color_white mb-0 mb-sm-3 pt-sm-5 color_change">
              Watch a demo
            </p>{" "}
            <img
              className=" sec_3_videoplayer_width shadow_hover  my-4"
              src={videoplayer}
              alt="videoplayer"
            />
            <p className=" mb-0 ff_Segoe fw-semibold fs_lg color_white mt-3 pb-sm-5 color_change  ">
              Catalyze AI is a predictive analytics business development
              platform
            </p>
          </div>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body className=" text-center">
            <iframe
              width="100%"
              height="430"
              src="https://www.youtube.com/embed/eKqY-oP1d_Y"
              title="How to Start Coding? Learn Programming for Beginners"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
}

export default Example;
