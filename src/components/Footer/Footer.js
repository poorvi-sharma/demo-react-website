import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

function openTab() {
  window.open("mailto:info@mysite.com");
}

function openTab1() {
  window.open("https://www.linkedin.com/company/wix-com/");
}

function openTab2() {
  window.open("https://twitter.com/wix");
}

function openTab3() {
  window.open("https://wix.com");
}

function Footer() {
  return (
    <div className="main-footer">
      <div className="row">
        {/* Column1 */}
        <div className="col-lg-3 col-mg-3 col-sm-12">
          <h4>Phone</h4>
          <h1 className="list-unstyled">
            <h6>123-456-7890</h6>
          </h1>
        </div>
        {/* Column2 */}
        <div className="col-lg-3 col-mg-3 col-sm-12">
          <h4>Email</h4>
          <ui className="list-unstyled">
            <Link className="noul" onClick={openTab}>
              <h6>info@mysite.com</h6>
            </Link>
          </ui>
        </div>
        {/* Column3 */}
        <div className="col-lg-3 col-mg-3 col-sm-12">
          <h4>Follow me</h4>
          <ui className="list-unstyled">
            <Link className="icon" onClick={openTab1}>
              <FaLinkedinIn />
            </Link>
            <Link className="icon" onClick={openTab2}>
              <FaTwitter />
            </Link>
          </ui>
        </div>
        {/* Column4 */}
        <div className="col-lg-3 col-mg-3 col-sm-12">
          <p>© 2023 By Nicol Rider.</p>
          <p>
            Proudly created with{" "}
            <Link className="wix" onClick={openTab3}>
              wix.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
