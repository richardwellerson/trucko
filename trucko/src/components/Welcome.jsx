import React, { useContext } from 'react';
import Trucko from '../context';

const Welcome = () => {
  const { actualUser } = useContext(Trucko);
  return (
    <div className="welcome_all">
      <p>Bem vindo, {actualUser.apelido}!</p>
    </div>
  );
};

export default Welcome;
