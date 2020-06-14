import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Anonimo from '../img/anonimo-black.png';
import Important from '../img/important.svg';
import '../styles/Forum.css';

const StartForum = () => {
  return (
    <div className="container">
      <Header />
      <div className="select">
        <select name="slct">
          <option defaultValue>Anônimo</option>
          <option>Padrão</option>
        </select>
      </div>

      <div className="containerModo">
        <div className="anonimo">
          <img src={Anonimo} alt="show anonymous option" />
          <p className="destaque">Anônimo</p>
          <div className="indicativo">
            <img src={Important} alt="exclamation" />
          </div>
        </div>

        <div className="gerarPergunta inputModel">
          <label htmlFor="criarPergunta">Qual a sua pergunta?</label>
          <input
            type="text"
            className="form-control"
            id="criarPergunta"
          />
          <button className="btn-principal">Enviar</button>
        </div>
        <div className="descri">
          <div className="box">
            <p className="destaque">Fórum</p>
            <span>
              Tem alguma dúvida, precisa de alguma ajuda ou está passando por algum dificuldade?
              Deixe sua pergunta que outros caminhoneiros te ajudam.
          </span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default StartForum;
