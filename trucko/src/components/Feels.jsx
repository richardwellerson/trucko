import React from 'react';
import VerySad from '../img/VerySad.svg';
import Sad from '../img/Sad.svg';
import Ok from '../img/Ok.svg';
import Happy from '../img/Happy.svg';
import VeryHappy from '../img/VeryHappy.svg';
import '../styles/Feels.css';

const feelings = [VerySad, Sad, Ok, Happy, VeryHappy];
const textFeelings = ['Muito mal', 'Mal', 'Ok', 'Bem', 'Muito bem'];

const Feels = () => {
  return (
    <div className="feels_all">
      <p>Como você está se sentindo hoje?</p>
      <div className="feels_options">
        {feelings.map((feel, index) => (
          <div className="feels_icon_div">
            <img
              src={feel}
              alt={`feels ${textFeelings[index]}`}
              className="feels_icon"
            />
            <p className="feels_text">{textFeelings[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Feels;
