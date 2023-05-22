import React from "react";

function About() {
  return (
    <div
      className="m-auto  lg:w-5/6 md:w-4/5 w-3/4 flex flex-wrap justify-center scroll-mt-24"
      id="About"
    >
      <p className=" font-bold lg:text-5xl  text-2xl  ">About Me</p>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow w-full  content-center  text-center">
          {/* Content Here */}
          <div className="blob m-auto">
            <img
              className="mask mask-circle magicpattern w-90  grayscale"
              src="/Valencia, Celine N.png"
            />
          </div>
        </div>
        {/* Divider */}
        <div className="divider lg:divider-horizontal "></div>

        <div className="grid flex-grow  card  place-items-center">
          <div className="form-control flex gap-5 lg:w-4/5">
            <p className=" text-justify   ">
              Hello, I'm Celine Valencia, a passionate front-end developer and
              graphic designer. My journey into this field was inspired by my
              love for turning creativity into reality. The combination of
              programming and creative design allows me to indulge in two things
              I truly enjoy.
              <br />
              <br />I excel at problem-solving and possess a natural flair for
              creativity. Moreover, I have a genuine passion for learning new
              things. I firmly believe in the saying 'if there's a will, there's
              a way,' and I'm always ready to explore new avenues and
              possibilities in order to deliver exceptional results. I'm excited
              to embark on new projects and collaborate with individuals who
              value the perfect blend of creativity and functionality. Let's
              work together to transform your ideas into engaging and visually
              stunning experiences. Get in touch, and let's make something
              remarkable!
            </p>
          </div>
          <div className=" flex flex-wrap  gap-5 p-5 justify-center">
            {/* html */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              className="w-12 lg:w-16"
            />
            {/* css */}

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              className="w-12 lg:w-16"
            />

            {/* tailwind */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              className="w-12 lg:w-16"
            />
            {/* Sass */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              className="w-12 lg:w-16"
            />
            {/* Boostrap */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
              className="w-12 lg:w-16"
            />
            {/* React */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              className="w-12 lg:w-16"
            />
            {/* php */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              className="w-12 lg:w-16"
            />
            {/* Mysql */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              className="w-12 lg:w-16"
            />
            {/* firebase */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
              className="w-12 lg:w-16"
            />
            {/* illustrator */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
              className="w-12 lg:w-16"
            />
            {/* Photoshop */}

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
              className="w-12 lg:w-16"
            />

            {/* Figma */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              className="w-12 lg:w-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
