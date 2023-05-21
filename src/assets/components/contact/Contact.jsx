import React from "react";
import { Location, Message } from "iconsax-react";
function Contact() {
  return (
    <div className="h-auto  my-10 lg:w-4/6 md:w-4/5 w-3/4 place-content-start  m-auto">
      <p className=" font-bold lg:text-5xl  text-2xl my-5">Contact</p>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow  content-center">
          <span className="flex  gap-4">
            <Message size="20" color="#1f252d" variant="Bold" />
            celine.nvalencia@gmail.com
          </span>
          <span className="flex  gap-4">
            <Location size="20" color="#1f252d" variant="Bold" /> Cabuyao,
            Laguna
          </span>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow  card  place-items-center">
          <div className="form-control flex gap-5">
            <label className="input-group ">
              <span className=" font-body bg-neutral text-white w-2/3">
                Email
              </span>
              <input type="text" className="input input-bordered font-medium" />
            </label>
            <label className="input-group ">
              <span className=" font-body bg-neutral text-white w-2/3">
                Subject
              </span>
              <input type="text" className="input input-bordered font-medium" />
            </label>
            <label className="input-group ">
              <textarea
                placeholder="Message here..."
                className="textarea textarea-bordered textarea-md w-full max-w-xs font-medium"
              ></textarea>
            </label>
            <button className="btn btn-active">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
