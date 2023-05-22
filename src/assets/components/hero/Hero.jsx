import React from "react";
import Fade from "react-reveal/Fade";
import { DocumentDownload, HeartCircle } from "iconsax-react";

function Hero() {
  return (
    <div>
      <Fade Up>
        <div className="hero h-screen w-screen " id="Home">
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:w-4/6 md:w-4/5 w-3/4 place-content-start p-5  items-center lg:gap-20 gap-10">
            <div>
              <h1 className="lg:text-5xl text-2xl font-bold  ">
                Celine Valencia
              </h1>
              <h3 className="my-2 ">
                {/* <div className="divider lg:sh"> */}
                Front End Developer | Graphic Designer
                {/* </div> */}
              </h3>
              <p className="my-12 text-justify gap-4 flex items-center flex-wrap text-sm md:text-base lg:text-base ">
                <HeartCircle size="32" color="#ff8a65" variant="Bold" /> I like
                to create creative stuff. <br />
                Inspired to turn creativity into
              </p>
              <div className="flex flex-shrink gap-8 items-center mt-4">
                <a
                  className="cursor-pointer"
                  href="https://www.linkedin.com/in/celinevalencia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <box-icon
                    name="linkedin-square"
                    type="logo"
                    color="#1F252D"
                    size="md"
                    animation="tada-hover"
                  ></box-icon>
                </a>
                <a
                  className="cursor-pointer"
                  href="https://github.com/Paowiee16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <box-icon
                    name="github"
                    type="logo"
                    color="#1F252D"
                    size="md"
                    animation="tada-hover"
                  ></box-icon>
                </a>
              </div>
            </div>
            <img
              className="mask mask-circle magicpattern lg:w-80 w-56 "
              src="/Valencia, Celine N.png"
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Hero;
