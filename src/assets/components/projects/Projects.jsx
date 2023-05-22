import React from "react";
import { DiHtml5 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { Link2 } from "iconsax-react";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <div className="lg:w-3/4 m-auto flex flex-wrap gap-4 lg:h-screen  content-center">
      <Fade bottom>
        <div>
          <p className=" font-bold lg:text-5xl  text-2xl  ">Projects</p>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Web Designs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card lg:card-side lg:w-fit m-auto bg-white border-2  p-2">
          <figure>
            <img src="public/FauxCoinCover.png" alt="Album" className=" card" />
          </figure>
          <div className="card-body lg:w-4/5 ">
            <h2 className="card-title">1. Faux Coin Exchange</h2>
            <p className="text-justify flex-grow-0 ">
              Developed a personal project website using React and Tailwind CSS
              that simulates a cryptocurrency exchange called FauxCoin Exchange.
              The website allows users to view real-time cryptocurrency prices
              and practice trading in a simulated environment. This project
              allowed me to strengthen my React and CSS skills.
            </p>
            <div className="flex flex-wrap justify-start gap-2">
              <div className="badge badge-info ">REACT</div>
              <div className="badge badge-info ">TAILWIND</div>
            </div>
            <div className="flex-grow card-actions justify-center items-center mt-12">
              <button className="btn btn-nuetral normal-case gap-3">
                Live <Link2 size="12" color="#d9e3f0" />
              </button>
              <a
                href="https://github.com/Paowiee16/CryptoProject"
                className=" cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon name="github" type="logo" size="md"></box-icon>
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
