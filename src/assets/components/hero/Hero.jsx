// eslint-disable-next-line no-unused-vars
import React from "react";

import { HeartCircle, DocumentDownload } from "iconsax-react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Hero() {
  return (
    <div>
      <div data-aos="fade-up" className="hero h-screen w-screen " id="Home">
        <div className="flex flex-col-reverse lg:flex-row-reverse md:w-4/5 w-3/4 place-content-center p-5  items-center lg:gap-20 gap-10">
          <div data-aos="fade-up">
            <h1 className="lg:text-7xl text-5xl font-bold  ">
              Celine Valencia
            </h1>
            <h2 className="my-2 text-lg">Front End Developer</h2>
            <div data-aos="slide-up">
              <p className="my-12 text-justify gap-4 flex items-center flex-wrap text-sm  md:text-lg ">
                <HeartCircle size="32" color="#ff8a65" variant="Bold" /> I like
                to create creative stuff. <br />
                Inspired to turn creativity into reality.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-shrink lg:gap-8 gap-4  items-center mt-4 "
            >
              <a
                aria-label="LinkedIn Profile"
                className="cursor-pointer"
                href="https://www.linkedin.com/in/celinevalencia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin
                  size={34}
                  className=" w-12  h-auto dark:text-white"
                />
              </a>
              <a
                aria-label="Github Profile"
                className="cursor-pointer"
                href="https://github.com/Paowiee16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub
                  size={34}
                  className="  w-12   h-auto dark:text-white"
                />
              </a>
              <a
                className="btn normal-case gap-2 lg:btn-md lg:gap-4 lg:text-lg dark:bg-[#3b82f680] dark:text-white tracking-widest"
                href="Celine_Valencia_Resume.pdf"
                download="Valencia, Celine - Resume"
              >
                Resume <DocumentDownload className="w-12  lg:w-5 " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
