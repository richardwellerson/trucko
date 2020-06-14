import React from 'react';
import ExercisesImg from '../img/exercicios.png';
import '../styles/Exercises.css';

const Exercises = () => {
  return (
    <div class="container">
      <div class="title">
        <p>Cuide da sua saúde e <strong>acumule</strong> pontos</p>
      </div>
      <div class="frase">
        <img src={ExercisesImg} alt="person" />
        <p class="destaque">Apenas 5 minutos</p>
        <p>fazem toda diferença</p>
      </div>
      <div class="escolherExer">
        <p>Escolha uma das opções</p>
        <button class="btn-principal">Caminhada</button>
        <button class="btn-principal">Corrida</button>
        <button class="btn-principal">Polichinelo</button>
      </div>
    </div>
  );
};

export default Exercises;
