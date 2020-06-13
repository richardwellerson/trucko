import React, { useState } from "react";
import PropTypes from "prop-types";
import Trucko from "./index";
import Naldo from '../img/Naldo.svg';
import Nay from '../img/Nay.svg';
import Folgado from '../img/Folgado.svg';
import Travesso from '../img/Travesso.svg';

const truckers = [
  {
    nome: "Reginaldo Luiz Carlos Silva",
    apelido: "Naldo",
    cadastradoEm: "06/2020",
    celular: 89912345678,
    placar: 560000,
    pict: Naldo,
    email: "reginaldoreidoasfalto@gmail.com",
    id: "06899123456782020", 
  },
  {
    nome: "Nayara Nascimento",
    apelido: "Nay",
    cadastradoEm: "04/2020",
    celular: 11912345678,
    placar: 330000,
    pict: Nay,
    email: "nayaradev@gmail.com",
    id: "04119123456782020",
  },
  {
    nome: "Richard Wellerson Folgado Martins",
    apelido: "Sargento",
    cadastradoEm: "04/2020",
    celular: 31912345678,
    placar: 333000,
    pict: Folgado,
    email: "sargentofolgado@gmail.com",
    id: "04319123456782020",
  },
  {
    nome: "Thiago Travessa Pontes",
    apelido: "Travesso",
    cadastradoEm: "07/2020",
    celular: 22912345678,
    placar: 400730,
    pict: Travesso,
    email: "travessiadaspontes@gmail.com",
    id: "07229123456782020",
  },
];

const questions = [
  {
    pergunta: "Um ninho de mafagafos",
    anonimo: true,
    data: Date.now(),
    quesUserID: "07229123456782020",
    flag: false, // Denunciada ou não
  }
];

const answers = [
  {
    pergunta: "Um ninho de mafagafos",
    anonimo: false,
    data: Date.now(),
    ansUserID: "04119123456782020",
    flag: false,
    aval: 5,
  },
  {
    pergunta: "Um ninho de mafagafos",
    anonimo: false,
    data: Date.now(),
    ansUserID: "06899123456782020",
    flag: false,
    aval: 2,
  },
];

// padrão avaliação 3 se o user n setar valores
// id da resposta = dia, mes, ano, hora, minuto, idUser = converter em hash.

const MyContext = ({ children }) => {
  const [users, setUsers] = useState(truckers);
  const [actualUser, setActualUser] = useState(truckers[0]);
  const [forum, setForum] = useState(questions);

  const toTrucko = {
    users,
    setUsers,
    actualUser,
    setActualUser,
    forum,
    setForum,
  };

  return <Trucko.Provider value={toTrucko}>{children}</Trucko.Provider>;
};

export default MyContext;

MyContext.propTypes = {
  children: PropTypes.node.isRequired,
};
