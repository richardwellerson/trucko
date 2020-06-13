import React from "react";
import "../styles/Footer.css";
import Help from "../img/Help.svg";
import User from "../img/User.svg";
import Point from "../img/Point.svg";
import Question from "../img/Question.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={User} alt="User" />
      <img src={Question} alt="Question" />
      <img src={Point} alt="Point" />
      <img src={Help} alt="Help" />
    </div>
  );
};

export default Footer;
