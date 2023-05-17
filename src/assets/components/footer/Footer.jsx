import React from "react";
import "boxicons";
function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <box-icon name="cat" type="solid" color="#E6D6D6"></box-icon>
        <p>Celine Valencia</p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a>
            <box-icon
              name="linkedin-square"
              type="logo"
              color="#e6d6d6"
            ></box-icon>
          </a>
          <a>
            <box-icon name="github" type="logo" color="#e6d6d6"></box-icon>
          </a>
          <a></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
