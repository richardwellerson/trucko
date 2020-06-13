import React, { useContext } from "react";
import Trucko from "../context";

const TextLight = () => {
  const { homeLight } = useContext(Trucko);
  return (
    <div>
      {homeLight.map((word) => (
        <p>{word}</p>
      ))}
    </div>
  );
};

export default TextLight;
