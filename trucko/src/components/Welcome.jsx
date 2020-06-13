import React, { useContext } from 'react';
import Trucko from '../context';

const Welcome = () => {
  const { actualUser } = useContext(Trucko);
  return (
    <div>
      <p>Bem vindo, {actualUser.nome}!</p>
    </div>
  );
};

export default Welcome;
