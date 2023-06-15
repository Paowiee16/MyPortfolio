// eslint-disable-next-line no-unused-vars
import React from "react";

import { HeartCircle, DocumentDownload } from "iconsax-react";

function Hero() {
  return (
    <div>
      <div data-aos="fade-up" className="hero h-screen w-screen " id="Home">
        <div className="flex flex-col-reverse lg:flex-row-reverse md:w-4/5 w-3/4 place-content-center p-5  items-center lg:gap-20 gap-10">
          <div data-aos="fade-up">
            <h1 className="lg:text-7xl text-5xl font-bold  ">
              Celine Valencia
            </h1>
            <h3 className="my-2 text-lg">Front End Developer</h3>
            <div data-aos="slide-up">
              <p className="my-12 text-justify gap-4 flex items-center flex-wrap text-sm  md:text-lg ">
                <HeartCircle size="32" color="#ff8a65" variant="Bold" /> I like
                to create creative stuff. <br />
                Inspired to turn creativity into reality.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-shrink lg:gap-8 gap-2  items-center mt-4 "
            >
              <a
                className="cursor-pointer"
                href="https://www.linkedin.com/in/celinevalencia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin-square md:bx-lg bx-md  bx-tada-hover dark:text-white"></i>
              </a>
              <a
                className="cursor-pointer"
                href="https://github.com/Paowiee16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-github md:bx-lg bx-md bx-tada-hover dark:text-white"></i>
              </a>
              <a
                className="btn normal-case gap-2 btn-sm lg:btn-md lg:gap-4 lg:text-lg dark:bg-[#3b82f680] dark:text-white tracking-widest"
                href="Celine_Valencia_Resume.pdf"
                download="Valencia, Celine - Resume"
              >
                Resume <DocumentDownload className="w-4 lg:w-5 dark:text-red" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
