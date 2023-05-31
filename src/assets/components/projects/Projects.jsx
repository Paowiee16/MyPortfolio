// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link2 } from "iconsax-react";

function Projects() {
  return (
    <div
      className="project lg:w-5/6 lg:h-screen md:w-4/5 w-3/4  m-auto flex flex-wrap text-center justify-center content-center   dark:bg-[#18191A] dark:text-white "
      id="Webdesign"
    >
      <div>
        <p className=" font-bold lg:text-5xl  text-2xl  my-5">Projects</p>
      </div>
      <div className="card lg:card-side lg:w-fit m-auto bg-white border-2 p-5 shadow-md    dark:border-[#393E46] dark:bg-[#242526] dark:text-white ">
        <figure>
          <img src="webpage.PNG" alt="Album" className=" card" />
        </figure>
        <div className="card-body lg:w-4/5 p-3 ">
          <h2 className="card-title text-sm lg:text-2xl">
            1. Faux Coin Exchange
          </h2>
          <p className="text-justify flex-grow-0  text-ellipsis overflow-hidden text-md lg:text-lg">
            Developed a personal project website using React and Tailwind CSS
            that simulates a cryptocurrency exchange called FauxCoin Exchange.
            The website allows users to view real-time cryptocurrency prices and
            practice trading in a simulated environment. This project allowed me
            to strengthen my React and CSS skills.
          </p>
          <div className="flex flex-wrap justify-start gap-2">
            <div className="badge badge-info font-semibold dark:bg-warning  ">
              REACT
            </div>
            <div className="badge badge-info font-semibold dark:bg-warning ">
              TAILWIND
            </div>
          </div>
          <div className="flex-grow card-actions justify-center items-center mt-12">
            <button className="btn btn-nuetral normal-case gap-3 dark:bg-[#3b82f680] dark:text-white tracking-widest">
              Live <Link2 size="12" color="#d9e3f0" />
            </button>
            <a
              href="https://github.com/Paowiee16/CryptoProject"
              className=" cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github md:bx-lg bx-md bx-tada-hover dark:text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
