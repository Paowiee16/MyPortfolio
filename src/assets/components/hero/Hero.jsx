import React from "react";
import Fade from "react-reveal/Fade";

function Hero() {
  return (
    <div>
      <Fade left>
        <div className="hero h-96  lg:h-screen " id="Home">
          <div className="flex-col lg:flex-row-reverse p-5 ">
            <div>
              <h1 className="lg:text-5xl text-2xl font-bold ">
                Hi, I am Celine Valencia
              </h1>
              <h3 className=" my-3">
                Front End Developer | Graphic Designer | UI/UX Designer
              </h3>
              <p className="my-3">&#128205; Cabuyao, Laguna</p>
              <label className="btn btn-primary gap-4" htmlFor="my-modal-6">
                Message Me
                <box-icon name="message-rounded" color="#A0BAEB"></box-icon>
              </label>
            </div>
          </div>
        </div>

        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal  sm:modal-middle ">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-6"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            <h1>Contact</h1>
            <label className="btn btn-sm">Send</label>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Hero;
