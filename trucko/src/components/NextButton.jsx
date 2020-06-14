import React from "react";
import { Link } from "react-router-dom";

const NextButton = (props) => {
  return (
    <Link to={`${props.redirect}`}>
      <div>
        <button className={props.className}>Próximo</button>
      </div>
    </Link>
  );
};

export default NextButton;
