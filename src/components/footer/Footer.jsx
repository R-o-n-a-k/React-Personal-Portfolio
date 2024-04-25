import "./Footer.css";
import React from "react";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      Created by <u>RONAK</u> | <i className="fa-regular fa-copyright"></i>{" "}
      {currentYear} All rights reserved.
    </div>
  );
}

export default Footer;
