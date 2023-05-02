import React from "react";
import { AiFillHeart } from "react-icons/ai";
import "./Footer.css";
import "animate.css";

const Footer = () => {
  return (
    <div className="footcont animate__animated animate__bounce animate__infinite">
      <h3>
        Made with{" "}
        <span className="heart">
          <AiFillHeart />{" "}
        </span>{" "}
        by Nishant
      </h3>
    </div>
  );
};

export default Footer;
