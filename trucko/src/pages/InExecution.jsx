<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/InExecution.css";
=======
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/InExecution.css';
>>>>>>> 101d4db903fb73009031ba416b356207fa145c14

const InExecution = () => {
  return (
    <div>
      <Header />
      <div class="container">
        <div class="title">
          <p>Registrando Caminhada</p>
        </div>
        <div class="contador cronometro">
<<<<<<< HEAD
          <p class="destaque">4:59</p>
=======
          <p class="destaque"></p>
>>>>>>> 101d4db903fb73009031ba416b356207fa145c14
          <p>Tempo</p>
        </div>
        <div class="contador distancia">
          <p class="destaque">5m</p>
          <p>Distância</p>
        </div>
        <div class="finalizar">
<<<<<<< HEAD
          <p>
            Quando finalizar o crônometro você ganha <strong>30 pontos</strong>.
          </p>
          <Link to="/firstRun">
            <button type="button" class="btn-principal">
              Finalizar
            </button>
          </Link>
=======
          <p>Quando finalizar o crônometro você ganha <strong>30 pontos</strong>.</p>
          <button type="button" class="btn-principal">Finalizar</button>
>>>>>>> 101d4db903fb73009031ba416b356207fa145c14
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InExecution;
