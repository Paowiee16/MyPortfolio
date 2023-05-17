import React from "react";

function Hero() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="Valencia, Celine N..png"
            className="max-w-sm  shadow-2xl  rounded-s-full"
          />
          <div>
            <h1 className="text-5xl font-bold">Celine Valencia</h1>
            <p className="p-16  text-justify">
              Hey there! I'm a passionate front-end developer and graphic
              designer hailing from the beautiful city of Cabuyao, Laguna. With
              a knack for creating eye-catching websites and awesome visuals, I
              bring a mix of creativity and technical skills to the table. From
              coding sleek and user-friendly interfaces using HTML, CSS, and
              JavaScript, to designing stunning logos, illustrations, and UI
              elements, I love turning ideas into digital magic. Whether you
              need a website that wows or visuals that pop, I'm your go-to
              person to make it happen. Let's collaborate and bring your
              projects to life!
            </p>
            <button className="btn btn-primary gap-4">
              Message Me
              <box-icon name="message-rounded" color="#c5ffb9"></box-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
