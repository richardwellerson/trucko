import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/InExecution.css";

const InExecution = () => {
  return (
    <div>
      <Header />
      <div class="container">
        <div class="title">
          <p>Registrando Caminhada</p>
        </div>
        <div class="contador cronometro">
          <p class="destaque">4:59</p>
          <p>Tempo</p>
        </div>
        <div class="contador distancia">
          <p class="destaque">5m</p>
          <p>Distância</p>
        </div>
        <div class="finalizar">
          <p>
            Quando finalizar o crônometro você ganha <strong>30 pontos</strong>.
          </p>
          <Link to="/firstRun">
            <button type="button" class="btn-principal">
              Finalizar
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InExecution;
