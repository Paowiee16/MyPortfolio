// eslint-disable-next-line no-unused-vars
import React from "react";

function About() {
  return (
    <div
      data-aos="fade-up"
      className="m-auto lg:mt-0 mt-24 lg:h-screen h-auto content-center justify-center lg:w-5/6 md:w-4/5 w-3/4 flex flex-wrap  scroll-mt-24"
      id="About"
    >
      <p className=" font-bold md:text-5xl  text-2xl  ">About Me</p>
      <div className="flex flex-col w-full lg:flex-row items-center">
        <div className="grid  w-max  content-center  text-center ">
          <div data-aos="fade-up" className=" m-auto ">
            <img
              className="rounded-full lg:w-full w-56   "
              src="celine.webp"
              alt="celine"
              loading="lazy"
            />
          </div>
        </div>
        {/* About Description */}
        <div data-aos="fade-right" className="grid  place-items-center w-4/5">
          <div className="form-control flex gap-5 p-5 ">
            <p className=" text-justify  md:text-lg text-sm  ">
              Hello, I&#39;m Celine Valencia, a passionate front-end developer
              and graphic designer. My journey into this field was inspired by
              my love for turning creativity into reality. The combination of
              programming and creative design allows me to indulge in two things
              I truly enjoy.
              <br />
              <br />I excel at problem-solving and possess a natural flair for
              creativity. Moreover, I have a genuine passion for learning new
              things. I firmly believe in the saying &#39;if there&#39;s a will,
              there&#39;s a way,&#39; and I&#39;m always ready to explore new
              avenues and possibilities in order to deliver exceptional results.
              I&#39;m excited to embark on new projects and collaborate with
              individuals who value the perfect blend of creativity and
              functionality. Let&#39;s work together to transform your ideas
              into engaging and visually stunning experiences. Get in touch, and
              let&#39;s make something remarkable!
            </p>
          </div>
          <div
            data-aos="fade-right"
            className=" flex flex-wrap  gap-5 p-5 justify-center"
          >
            {/* html */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              className="w-12 lg:w-16"
              alt=""
            />
            {/* css */}

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              className="w-12 lg:w-16"
              alt=""
            />

            {/* tailwind */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              className="w-12 lg:w-16"
              alt=""
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
              className="w-12 lg:w-16"
              alt=""
            />
            {/* React */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              className="w-12 lg:w-16"
              alt=""
            />
            {/* php */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              className="w-12 lg:w-16"
              alt=""
            />
            {/* Mysql */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              className="w-12 lg:w-16"
              alt=""
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
              className="w-12 lg:w-16"
              alt=""
            />
            {/* Photoshop */}

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
              className="w-12 lg:w-16"
              alt=""
            />

            {/* Figma */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              className="w-12 lg:w-16"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
