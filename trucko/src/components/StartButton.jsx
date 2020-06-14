import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Trucko from '../context';
import '../styles/StartButton.css';

const StartButton = () => {
  const { isHidden } = useContext(Trucko);
  return (
    isHidden ?
      <Link to="/status">
        <button className="start_button_green">
          Iniciar
        </button>
      </Link> : null
  );
};

export default StartButton;
