import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      Footer
      <div className="footer__logo">
        <img src="./img/logo-black.png" alt="logo" />
      </div>
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
