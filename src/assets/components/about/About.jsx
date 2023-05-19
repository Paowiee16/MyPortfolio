import React from "react";
import {
  DiJavascript,
  DiHtml5,
  DiReact,
  DiSass,
  DiPhp,
  DiMysql,
  DiPhotoshop,
} from "react-icons/di";

const techstack = [
  {
    icon: DiHtml5,
    name: "HTML 5",
    color: "#E34C26",
  },
  {
    icon: DiJavascript,
    name: "JavaScript",
    color: "#D99924",
  },
  {
    icon: DiReact,
    name: "React",
    color: "#5CD0EE",
  },
  {
    icon: DiSass,
    name: "Sass",
    color: "#C36291",
  },
  {
    icon: DiPhp,
    name: "PHP",
    color: "#818BB4",
  },
  {
    icon: DiMysql,
    name: "MySQL",
    color: "#006F88",
  },
];
function About() {
  return (
    <div className="p-5 h-screen" id="About">
      <div className="max-w-5xl transition-colors ease-linear shadow-md m-auto">
        <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4">
          <span className="w-3 h-3 border-2 border-transparent  rounded-full bg-red-400  "></span>
          <span className="w-3 h-3 border-2 border-transparent rounded-full bg-yellow-400 "></span>
          <span className="w-3 h-3 border-2 border-transparent rounded-full bg-green-400 "></span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 border-t-0 w-full rounded-b-lg">
          <div className="flex flex-col w-full lg:flex-row">
            <div className=" card before:rounded-box place-items-center">
              <div className="avatar p-5">
                <div className="w-36 mask mask-squircle md:w-48 ">
                  <img src="https://i.pinimg.com/564x/01/78/8c/01788c1bfdaa917adb4e6e26c49a64a3.jpg" />
                </div>
              </div>
            </div>

            <div className="grid flex-grow  card  rounded-box place-items-center p-5">
              <p className=" text-justify dark:text-white">
                Hey there! I'm a passionate front-end developer and graphic
                designer hailing from the beautiful city of Cabuyao, Laguna.
                With a knack for creating eye-catching websites and awesome
                visuals, I bring a mix of creativity and technical skills to the
                table. From coding sleek and user-friendly interfaces using
                HTML, CSS, and JavaScript, to designing stunning logos,
                illustrations, and UI elements, I love turning ideas into
                digital magic. Whether you need a website that wows or visuals
                that pop, I'm your go-to person to make it happen. Let's
                collaborate and bring your projects to life!
              </p>
              <div className="flex flex-wrap gap-4 justify-center  dark:text-white p-5">
                {techstack.map((stack) => (
                  <span
                    key={stack.name}
                    className=" flex flex-col justify-center items-center"
                  >
                    <stack.icon size={35} color={stack.color} />
                    <p className=" text-center">{stack.name}</p>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
