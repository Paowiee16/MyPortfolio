import React from "react";
import Fade from "react-reveal/Fade";

function Hero() {
  return (
    <div>
      <Fade Up>
        <div className="hero h-screen w-screen" id="Home">
          <div className="flex flex-col lg:flex-row-reverse p-5 ">
            <div>
              <h1 className="lg:text-5xl text-2xl font-bold  my-8">
                Celine Valencia
              </h1>
              <h3 className="my-4 ">
                {/* <div className="divider lg:sh"> */}
                Front End Developer | Graphic Designer | UI/UX Designer
                {/* </div> */}
              </h3>
              <p className="my-4 text-justify lg:w-2/3">
                &#128205; Im creative designer based in Laguna, and I'm very
                passionate and dedicated to my work.
              </p>
              <label
                className="btn btn-primary gap-4 normal-case my-4 "
                htmlFor="my-modal-6"
              >
                Say Hi
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
