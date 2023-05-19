import React from "react";
import { DiHtml5 } from "react-icons/di";
import { SiTailwindcss, SiVite } from "react-icons/si";

function Projects() {
  return (
    <div className="lg:w-3/4 m-auto h-screen">
      <div
        className="card lg:card-side w-3/4 m-auto
       bg-base-100 shadow-xl p-5"
      >
        <figure>
          <img src="public/FauxCoinCover.png" alt="Album" className=" card" />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">Faux Coin Exchange</h2>
          <p className=" text-justify">
            Developed a personal project website using React and Tailwind CSS
            that simulates a cryptocurrency exchange called FauxCoin Exchange.
            The website allows users to view real-time cryptocurrency prices and
            practice trading in a simulated environment. This project allowed me
            to strengthen my React and CSS skills.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="flex flex-col justify-center items-center ">
              <DiHtml5 className="text-4xl" color="#E34C26" /> HTML 5
            </span>
            <span className="flex flex-col justify-center items-center">
              <img
                src="https://www.svgrepo.com/show/374167/vite.svg"
                className="w-10"
              />{" "}
              VITE
            </span>
            <span className="flex flex-col justify-center items-center">
              <SiTailwindcss className="text-4xl" color="#07ADCA" />
              TAILWIND
            </span>
          </div>
          <div className="card-actions justify-center items-center">
            <button className="btn btn-primary">Live </button>
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
    </div>
  );
}

export default Projects;
