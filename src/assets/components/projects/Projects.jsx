// eslint-disable-next-line no-unused-vars
import React from "react";
import { ExportCircle } from "iconsax-react";

function Projects() {
  return (
    <div
      className="  snap-center project lg:w-5/6 lg:h-screen md:w-4/5 w-3/4  m-auto flex flex-wrap text-center justify-center content-center    "
      id="Webdesign"
    >
      <div data-aos="fade-up">
        <p className=" font-bold lg:text-5xl  text-2xl  my-5">Projects</p>
      </div>
      <div
        data-aos="fade-up"
        className="card lg:card-side lg:w-fit m-auto p-5     dark:text-white "
      >
        <figure data-aos="fade-up">
          <img src="webimage.png " alt="FauxCoin Exhange" className="" />
        </figure>
        <div data-aos="fade-right" className="card-body lg:w-4/5 p-3 ">
          <h2 className="card-title text-sm lg:text-2xl tracking-widest ">
            1. FauxCoin Exchange
          </h2>
          <div className="flex flex-wrap justify-start gap-2 ">
            <div className="badge   bg-[#482F96] dark:text-white">REACT</div>
            <div className="badge bg-[#482F96] dark:text-white">TAILWIND</div>
            <div className="badge bg-[#482F96] dark:text-white">API</div>
          </div>
          <p className="text-justify flex-grow-0  text-ellipsis overflow-hidden text-md lg:text-lg ">
            Developed a personal project website using React and Tailwind CSS
            that simulates a cryptocurrency exchange called FauxCoin Exchange.
            The website allows users to view real-time cryptocurrency prices and
            practice trading in a simulated environment. This project allowed me
            to strengthen my React and CSS skills.
          </p>

          <div className="card-actions items-center ">
            <a
              href="https://paowiee16.github.io/CryptoProject/"
              className=" cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-nuetral normal-case gap-3 dark:bg-[#3b82f680] dark:text-white tracking-widest">
                <ExportCircle size="30" color="#d9e3f0" variant="Bold" /> Live
              </button>
            </a>

            <a
              href="https://github.com/Paowiee16/CryptoProject"
              className=" cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-nuetral normal-case gap-3 dark:bg-[#3b82f680] dark:text-white tracking-widest">
                <i className="bx bxl-github md:bx-lg bx-md bx-tada-hover dark:text-white"></i>
                <span>Github</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
