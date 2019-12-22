import React from "react";
import elegantLogo from "../../images/elegant/elegant-logo.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <div className="bg-img"></div>
      <div className="pix-content text-center landing-content">
        <img src={elegantLogo} alt="" className="header-img" />
        <h1 className="pix-white secondary-font landing-title">
          <span className="pix_edit_text">
            <h1>
              <strong>How well do your viewers get you?</strong>
            </h1>
          </span>
        </h1>
        <div className="landing-subtitle">
          <h5 className="pix-slight-white text-center pix-margin-bottom-30 pix-small-width-text">
            <span className="pix_edit_text">
              We'll help you find out
              <br />
            </span>
          </h5>
        </div>
        <div>
          <Link to="/watch">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
