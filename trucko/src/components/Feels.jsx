import React from 'react';
import VerySad from '../img/VerySad.svg';
import Sad from '../img/Sad.svg';
import Ok from '../img/Ok.svg';
import Happy from '../img/Happy.svg';
import VeryHappy from '../img/VeryHappy.svg';
import '../styles/Feels.css';

const feelings = [VerySad, Sad, Ok, Happy, VeryHappy];
const textFeelings = ['Muito mal','Mal','Ok','Bem','Muito bem'];

const Feels = () => {
  return (
    <div className="feels_all">
      <p>Como você está se sentindo hoje?</p>
      <div className="feels_options">
        <div className="feels_icon_div">
          <img
            src={VerySad}
            alt="feels very sad"
            className="feels_icon"
          />
          <p className="feels_text">Muito mal</p>
        </div>
        <div className="feels_icon_div">
          <img
            src={Sad}
            alt="feels sad"
            className="feels_icon"
          />
          <p className="feels_text">Mal</p>
        </div>
        <div className="feels_icon_div">
          <img
            src={Ok}
            alt="feels ok"
            className="feels_icon"
          />
          <p className="feels_text">Ok</p>
        </div>
        <div className="feels_icon_div">
          <img
            src={Happy}
            alt="feels happy"
            className="feels_icon"
          />
          <p className="feels_text">Bem</p>
        </div>
        <div className="feels_icon_div">
          <img
            src={VeryHappy}
            alt="feels very happy"
            className="feels_icon"
          />
          <p className="feels_text">Muito bem</p>
        </div>
      </div>
    </div>
  );
};

export default Feels;
