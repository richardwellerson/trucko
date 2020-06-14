import React from "react";
import Confirm from "../img/Confirm.svg";

const awards = [
  "Acesso diário",
  "Kms registrados no app",
  "Responder perguntas de outros caminhoneiros",
  "Cumprindo metas de paradas",
  "Fazendo exercícios",
  "Respondendo quiz",
];
const HomeAwards2 = () => {
  return (
    <div className="home_awards">
      {awards.map((word) => (
        <div key={word} className="home_awards">
          <img src={Confirm} alt="" />
          {word}
        </div>
      ))}
    </div>
  );
};

export default HomeAwards2;
