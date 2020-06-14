import React from 'react';
import '../styles/SurpriseQuestion.css';

const SurpriseQuestion = () => {
  return (
    <div class="container">
      <div class="title">
        <p class="destaque">Quiz Supresa</p>
        <p>Acerte e ganhe pontos</p>
      </div>
      <div class="noticiaRef">
        <p>Segundo a notícia</p>
        <p class="destaque">
          5 Dicas de alimentação saudável
        </p>
      </div>
      <div class="quiz">
        <p>Responda</p>
        <p class="destaque">
          O ideal é fazer quantas refeições por dia?
        </p>
        <button type="button" class="btn-principal">Duas Refeições</button>
        <button type="button" class="btn-principal">Três Refeições</button>
        <button type="button" class="btn-principal">Quatro Refeições</button>
        <button type="button" class="btn-principal">Seis Refeições</button>
      </div>
    </div>
  );
};

export default SurpriseQuestion;
