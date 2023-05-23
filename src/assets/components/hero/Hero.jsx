import React from "react";

import { DocumentDownload, HeartCircle, Send2 } from "iconsax-react";

function Hero() {
  return (
    <div>
      <div className="hero h-screen w-screen " id="Home">
        <div className="flex flex-col-reverse lg:flex-row-reverse md:w-4/5 w-3/4 place-content-start p-5  items-center lg:gap-20 gap-10">
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
              <HeartCircle size="32" color="#ff8a65" variant="Bold" /> I like to
              create creative stuff. <br />
              Inspired to turn creativity into
            </p>
            <div className="flex flex-shrink lg:gap-8 gap-2  items-center mt-4 ">
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
                  animation="tada-hover"
                  size="md"
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
              <button className="btn normal-case gap-2 btn-xs lg:btn-md lg:gap-4 ">
                Resume <Send2 className="w-4" color="#d9e3f0" />
              </button>
            </div>
          </div>
          <img
            className="mask mask-circle magicpattern lg:w-80 w-56 "
            src="public/Valencia, Celine N.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
