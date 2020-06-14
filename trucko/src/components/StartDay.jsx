import React, { useContext } from "react";
import Trucko from "../context";

const StartDay = () => {
  const { actualUser } = useContext(Trucko);
  return (
    <div className="first_run_all">
      <div className="start_day_pic">
        <img src={actualUser.pict} alt={`${actualUser.name} shows on screen`} />
      </div>
      <p>Iniciar Atividade</p>
      <p>Acumule pontos por KM</p>
    </div>
  );
};

export default StartDay;
