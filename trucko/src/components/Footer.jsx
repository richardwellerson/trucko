import React from "react";
import Forum from "../img/Forum.svg";
import Exercise from "../img/Exercise.svg";
import Truck from "../img/StartAct.svg";
import News from "../img/News.svg";
import Trophy from "../img/Trophy.svg";
import "../styles/Footer.css";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link } from 'react-router-dom';
>>>>>>> 101d4db903fb73009031ba416b356207fa145c14

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/forum">
        <img src={Forum} alt="Forum" />
      </Link>
      <Link to="/exercises">
        <img src={Exercise} alt="Exercise" />
      </Link>
      <Link to="/firstRun">
        <img className="footer_truck" src={Truck} alt="Point" />
      </Link>
      <Link to="/news">
        <img src={News} alt="News" />
      </Link>
      <Link to="/ranking">
        <img src={Trophy} alt="Ranking" />
      </Link>
    </div>
  );
};

export default Footer;
