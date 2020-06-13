import React, { useContext } from 'react';
import Trucko from '../context';

const StartDay = () => {
  const { actualUser } = useContext(Trucko);
  return (
    <div>
      <img
        src={actualUser.pict}
        alt={`${actualUser.name} shows on screen`}
      />
      <p>Iniciar Atividade</p>
      <p>Acumule pontos por KM</p>
    </div>
  );
};

export default StartDay;
