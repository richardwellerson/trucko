import React, { useState } from "react";
import PropTypes from "prop-types";
import Trucko from "./index";
import Naldo from "../img/Naldo.svg";
import Nay from "../img/Nay.svg";
import Folgado from "../img/Folgado.svg";
import Travesso from "../img/Travesso.svg";

const truckers = [
  {
    nome: "Reginaldo Luiz Carlos Silva",
    apelido: "Naldo",
    cadastradoEm: "06/2020",
    celular: 89912345678,
    placar: 560000,
    pict: Naldo,
    email: "reginaldoreidoasfalto@gmail.com",
  },
  {
    nome: "Nayara Nascimento",
    apelido: "Nay",
    cadastradoEm: "04/2020",
    celular: 11912345678,
    placar: 330000,
    pict: Nay,
    email: "nayaradev@gmail.com",
  },
  {
    nome: "Richard Wellerson Folgado Martins",
    apelido: "Sargento",
    cadastradoEm: "04/2020",
    celular: 31912345678,
    placar: 333000,
    pict: Folgado,
    email: "sargentofolgado@gmail.com",
  },
  {
    nome: "Thiago Travessa Pontes",
    apelido: "Travesso",
    cadastradoEm: "07/2020",
    celular: 22912345678,
    placar: 400730,
    pict: Travesso,
    email: "travessiadaspontes@gmail.com",
  },
];

const MyContext = ({ children }) => {
  const [users, setUsers] = useState(truckers);
  const [actualUser, setActualUser] = useState(truckers[0]);
  const [homeText, setHomeText] = useState("");
  const [homeLight, setHomeLight] = useState([]);

  const toTrucko = {
    users,
    setUsers,
    actualUser,
    setActualUser,
    homeText,
    setHomeText,
    homeLight,
    setHomeLight,
  };

  return <Trucko.Provider value={toTrucko}>{children}</Trucko.Provider>;
};

export default MyContext;

MyContext.propTypes = {
  children: PropTypes.node.isRequired,
};
