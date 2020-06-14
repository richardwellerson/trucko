import React from 'react';

const SurpriseAnswer = () => {
  return (
    <div class="container">
      <div class="title">
        <p class="destaque">Quiz Supresa</p>
        <p>Acerte e ganhe pontos</p>
      </div>
      <div class="quiz">
        <p class="destaque">
          O ideal é fazer quantas refeições por dia?
        </p>
        <p class="btn-secundario">Duas Refeições</p>
      </div>
      <div class="resultado">
        <p>Parabéns!</p>
        <p>Você acertou</p>
        <div class="pontos">
          <p>Ganhou</p>
          <p class="qtdGanhos">10 Pontos</p>
        </div>
      </div>
      <p class="btn-principal">Fechar</p>

    </div>
  );
};

export default SurpriseAnswer;
