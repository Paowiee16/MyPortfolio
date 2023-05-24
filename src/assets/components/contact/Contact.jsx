import React from "react";
import { Location, Message } from "iconsax-react";
function Contact() {
  return (
    <div
      className=" flex  flex-wrap content-center h-auto   my-10 lg:w-4/6 md:w-4/5 w-3/4  justify-center m-auto "
      id="Contact"
    >
      <p className=" font-bold lg:text-5xl  text-2xl my-5">Contact</p>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow gap-4 content-start">
          <p className=" opacity-9 font-semibold tracking-widest">
            {" "}
            Get in touch with me!
          </p>
          <span className="flex  gap-4  md:text-2xl text-sm items-center">
            <Message size="20" variant="Bold" />
            celine.nvalencia@gmail.com
          </span>
          <span className="flex  gap-4 md:text-2xl text-sm items-center">
            <Location size="20" variant="Bold" />
            Cabuyao, Laguna
          </span>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow  card  place-items-center">
          <div className="form-control flex gap-5">
            <label className="input-group ">
              <span className=" font-body bg-neutral text-white w-2/3 dark:bg-[#3b82f680]">
                Email
              </span>
              <input
                type="text"
                className="input input-bordered font-medium  dark:text-black"
              />
            </label>
            <label className="input-group ">
              <span className=" font-body bg-neutral text-white w-2/3 dark:bg-[#3b82f680] ">
                Subject
              </span>
              <input
                type="text"
                className="input input-bordered font-medium dark:text-black"
              />
            </label>
            <label className="input-group ">
              <textarea
                placeholder="Message here..."
                className="textarea textarea-bordered textarea-md w-full max-w-xs font-medium  dark:text-black"
              ></textarea>
            </label>
            <button className="btn btn-active dark:bg-[#3b82f680]">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
