import React from 'react';
import '../styles/Feels.css';
import VerySad from '../img/verySad.png';
import Sad from '../img/sad.png';
import Ok from '../img/ok.png';
import Happy from '../img/happy.png';
import VeryHappy from '../img/veryHappy.png'

const feelings = [VerySad, Sad, Ok, Happy, VeryHappy];
const textFeelings = ['Muito mal', 'Mal', 'Ok', 'Bem', 'Muito bem'];

const Feels = () => {
  return (
    <div className="feels_all">
      <p className="feels_question">Como você está se sentindo hoje?</p>
      <div className="feels_options">
        {feelings.map((feel, index) => (
          <div
            className="feels_icon_div"
            key={`${textFeelings[index]} icon`}
          >
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
