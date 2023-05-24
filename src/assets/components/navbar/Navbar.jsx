import React, { useEffect, useState } from "react";
function Navbar() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
      console.log(theme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex bg-base-100 w-screen fixed top-0 shadow-sm z-30 dark:bg-[#18191A] dark:text-white  ">
      <div className=" navbar navbar-center justify-items-center  lg:w-3/4  m-auto      ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className=" font-semibold md:text-lg" href="#Home">
                  Home
                </a>
              </li>
              <li tabIndex={0}>
                <a
                  className="justify-between font-semibold md:text-lg"
                  href="#Webdesign"
                >
                  Projects
                </a>
              </li>
              <li>
                <a className=" font-semibold md:text-lg" href="#About">
                  About
                </a>
              </li>
              <li>
                <a className=" font-semibold md:text-lg" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a className="normal-case md:text-2xl font-extrabold">Celine</a>
        </div>
        <div className="navbar-center hidden lg:flex  text-xl ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className=" font-semibold " href="#Home">
                Home
              </a>
            </li>
            <li tabIndex={0}>
              <a className=" font-semibold " href="#Webdesign">
                Projects
              </a>
            </li>
            <li>
              <a className=" font-semibold " href="#About">
                About
              </a>
            </li>
            <li>
              <a className=" font-semibold " href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end  lg:gap-4 md:gap-4 gap-2 px-5">
          {" "}
          <button type="button" onClick={handleThemeSwitch}>
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
