import React from "react";
import Forum from '../img/Forum.svg';
import Exercise from '../img/Exercise.svg';
import Truck from '../img/StartAct.svg';
import News from '../img/News.svg';
import Trophy from '../img/Trophy.svg';
import "../styles/Footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Forum} alt="Forum" />
      <img src={Exercise} alt="Exercise" />
      <img className="footer_truck" src={Truck} alt="Point" />
      <img src={News} alt="News" />
      <img src={Trophy} alt="Ranking" />
    </div>
  );
};

export default Footer;
