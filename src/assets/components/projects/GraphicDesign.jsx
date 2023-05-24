// eslint-disable-next-line no-unused-vars
import React from "react";

function GraphicDesign() {
  const Cardcontents = [
    {
      title: "Mental Health",
      description: "Mental heatlh awareness for adolescents.",
      badgetag1: "Facebook",
      badgetag2: "Instagram",
      image: "public/MentalHealth/Okay kapa ba.png",
    },
    {
      title: "Mental Health",
      description: "Mental heatlh awareness for adolescents.",
      badgetag1: "Facebook",
      badgetag2: "Instagram",
      image: "public/MentalHealth/Okay kapa ba.png",
    },
    {
      title: "Mental Health",
      description: "Mental heatlh awareness for adolescents.",
      badgetag1: "Facebook",
      image: "public/MentalHealth/Okay kapa ba.png",
    },
  ];

  return (
    <div
      className=" lg:w-5/6 md:w-4/5 w-3/4  m-auto flex flex-wrap  lg:h-screen  content-center scroll-mt-4 "
      id="GraphicDesign"
    >
      <div>
        <p className=" font-bold lg:text-5xl  text-2xl  ">Projects</p>
        {/* Breadcrumbs */}
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Graphic Designs</a>
            </li>
          </ul>
        </div>
        <div className=" flex  flex-wrap text-center   text-xs lg:gap-4 gap-0 ">
          {Cardcontents.map((cards) => (
            <div
              key={cards.title}
              className="card lg:w-56 w-3/6 bg-white border-2"
            >
              <figure>
                <img
                  src={cards.image}
                  alt={cards.title}
                  className="rounded-xl "
                />
              </figure>
              <div className="card-body p-1 text-center">
                <h2 className="card-title">{cards.title}</h2>
                <p>{cards.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GraphicDesign;
