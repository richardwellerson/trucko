import React, { useContext } from "react";
import Trucko from "../context";

const StartDay = () => {
  const { actualUser } = useContext(Trucko);
  return (
    <div className="first_run_all">
      <div className="start_day_pic">
        <img src={actualUser.pict} alt={`${actualUser.name} shows on screen`} />
      </div>
      <div className="start_day_words">
        <p className="start_day_bold">Iniciar atividade</p>
        <p>Acumule pontos por KM</p>
      </div>
    </div>
  );
};

export default StartDay;
