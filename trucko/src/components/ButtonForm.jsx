import React from "react";
import { Link } from "react-router-dom";

const ButtonForm = () => {
  return (
    <div className="green_button_form">
      <button>Já tenho conta</button>
      <Link to="firstRun">
        <input type="button" value="Criar conta" />
      </Link>
    </div>
  );
};

export default ButtonForm;
