import React, { useContext, useState } from 'react';
import '../styles/Feels.css';
import VerySad from '../img/verySad.png';
import Sad from '../img/sad.png';
import Ok from '../img/ok.png';
import Happy from '../img/happy.png';
import VeryHappy from '../img/veryHappy.png'
import Trucko from '../context/';

const feelings = [VerySad, Sad, Ok, Happy, VeryHappy];
const textFeelings = ['Muito mal', 'Mal', 'Ok', 'Bem', 'Muito bem'];

const answerFeelings = (answer, setDayFeelings, setIsHidden) => {
  switch (answer) {
    case 'Muito mal':
      alert('Se não estiver se sentindo bem, evite trabalhar hoje. Se estiver sentindo dores, não deixe de procurar um médico.');
      break;
    case 'Mal':
      alert('Tente descansar por alguns minutos e colocar a cabeça no lugar. Trabalhe com cautela.');
      break;
    case 'Ok':
      alert('Nem todos os dias serão bons, mas isso não impede que você faça seu dia ser bom.');
      break;
    case 'Bem':
      alert('Boa! Que tal passar essa energia para outras pessoas também?');
      break;
    default:
      alert('Simbora pro dia!');
  };

  setDayFeelings(answer);
  setIsHidden(true);

};

const Feels = () => {
  const { isHidden, setIsHidden, setDayFeelings } = useContext(Trucko);
  return (
    !isHidden
      ? <div
        className="feels_all"
        hidden={isHidden}
      >
        <p className="feels_question">Como você está se sentindo hoje?</p>
        <div className="feels_options">
          {feelings.map((feel, index) => (
            <div
              className="feels_icon_div"
              key={`${textFeelings[index]} icon`}
              onClick={() => (answerFeelings(textFeelings[index], setDayFeelings, setIsHidden))}
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
      </div> : null
  );
};


export default Feels;
