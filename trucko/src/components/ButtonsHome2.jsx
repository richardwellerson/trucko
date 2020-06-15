import React from "react";
import { Link } from "react-router-dom";

const ButtonsHome2 = (props) => {
  return (
    <div className={props.className}>
      <Link to="/createAccount">
        <button>Criar conta</button>
      </Link>
      <button>Fazer login</button>
    </div>
  );
};

export default ButtonsHome2;
