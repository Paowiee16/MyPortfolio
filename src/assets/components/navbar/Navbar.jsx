import React from "react";
import { Sun1, Moon } from "iconsax-react";
function Navbar() {
  return (
    <div className="flex bg-base-100  w-screen fixed top-0 z-30  ">
      <div className=" navbar bg-base-100 navbar-center justify-items-center  lg:w-3/4  m-auto  ">
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
                <a className=" font-semibold " href="#Home">
                  Home
                </a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between font-semibold">
                  Projects
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100 ">
                  <li>
                    <a className=" font-semibold ">Web Designs</a>
                  </li>
                  <li>
                    <a className=" font-semibold ">Graphic Designs</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className=" font-semibold " href="#About">
                  About
                </a>
              </li>
              <li>
                <a className=" font-semibold ">Contact</a>
              </li>
            </ul>
          </div>
          <a className="normal-case text-xl font-extrabold">Celine</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className=" font-semibold " href="#Home">
                Home
              </a>
            </li>
            <li tabIndex={0}>
              <a className=" font-semibold ">
                Projects
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 ">
                <li>
                  <a className=" font-semibold ">Web Designs</a>
                </li>
                <li>
                  <a className=" font-semibold ">Graphic Designs</a>
                </li>
              </ul>
            </li>
            <li>
              <a className=" font-semibold " href="#About">
                About
              </a>
            </li>
            <li>
              <a className=" font-semibold ">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end  lg:gap-4 md:gap-4 gap-2">
          <label className="swap swap-rotate">
            <input type="checkbox" />

            <Sun1
              className="swap-on fill-current "
              size="24"
              color="#f0c803"
              variant="Bold"
            />

            <Moon
              size="32"
              color="#555555"
              variant="Outline"
              className="swap-off fill-current w-5 h-5"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
