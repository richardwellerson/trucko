import React from "react";
import Confirm from "../img/Confirm.svg";

const awards = ["Serviços", "Smartphones", "Recarga celular", "Eletrodomésticos", "Roupas e muito mais"];
const HomeAwards = () => {
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

export default HomeAwards;
