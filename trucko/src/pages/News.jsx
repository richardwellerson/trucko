import React from "react";
import "../styles/News.css";
import coracao from "../img/coracao.jpg";
import alimentacao from "../img/alimentacao.jpg";
import calculadora from "../img/calculadora.jpg";
import caminhao from "../img/caminhao.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const News = () => {
  return (
    <div>
      <Header />
      <div class="container">
        <div class="container-noticias">
          <div class="noticias_title">
            <p class="noticias_destaque">Notícias</p>
          </div>
          <div class="boxNoticia clearfixNoti">
            <img src={alimentacao} alt="exibicao_news" />
            <div class="boxDescriNoticia">
              <p class="destaque">5 Dicas de alimentação saudável</p>
              <p>Saiba como ter uma dieta adequada viajando pelas estradas do país.</p>
            </div>
          </div>
          <div class="boxNoticia clearfixNoti">
            <img src={caminhao} alt="exibicao_news" />
            <div class="boxDescriNoticia">
              <p class="destaque">Como economizar com a manutenção do caminhão</p>
              <p>Saiba como ter uma dieta adequada viajando pelas estradas do país.</p>
            </div>
          </div>
          <div class="boxNoticia clearfixNoti">
            <img src={coracao} alt="exibicao_news" />
            <div class="boxDescriNoticia">
              <p class="destaque">Doenças do Coração. Como prevenir</p>
              <p>Pequenas ações no dia a dia ajudam você a cuidar do coração</p>
            </div>
          </div>
          <div class="boxNoticia clearfixNoti">
            <img src={calculadora} alt="exibicao_news" />
            <div class="boxDescriNoticia">
              <p class="destaque">Com gerir os custos e gastos das viagens</p>
              <p>Aprenda como calcular os custos e gastos par economizar.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
