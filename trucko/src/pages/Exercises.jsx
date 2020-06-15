<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import ExercisesImg from "../img/exercicios.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Exercises.css";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import ExercisesImg from '../img/exercicios.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Exercises.css';
>>>>>>> 101d4db903fb73009031ba416b356207fa145c14

const Exercises = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="title">
<<<<<<< HEAD
          <p>
            Cuide da sua saúde e <strong>acumule</strong> pontos
          </p>
=======
          <p>Cuide da sua saúde e <strong>acumule</strong> pontos</p>
>>>>>>> 101d4db903fb73009031ba416b356207fa145c14
        </div>
        <div className="frase">
          <img src={ExercisesImg} alt="person" />
          <p className="destaque">Apenas 5 minutos</p>
          <p>fazem toda diferença</p>
        </div>
        <div className="escolherExer">
          <p>Escolha uma das opções</p>
          <Link to="/caminhada">
<<<<<<< HEAD
            <button type="button" className="btn-principal">
              Caminhada
            </button>
=======
            <button type="button" className="btn-principal">Caminhada</button>
>>>>>>> 101d4db903fb73009031ba416b356207fa145c14
          </Link>
          <button className="btn-principal">Corrida</button>
          <button className="btn-principal">Polichinelo</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Exercises;
