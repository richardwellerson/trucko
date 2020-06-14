import React from "react";
import logo2 from "../img/logo2.svg";

const HomeLogo = (props) => {
  return (
    <div className={props.className}>
      <img src={logo2} alt="logo" />
    </div>
  );
};

export default HomeLogo;
