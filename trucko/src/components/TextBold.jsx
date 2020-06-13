import React, { useContext } from "react";
import Trucko from "../context";

const TextBold = () => {
  const { homeText } = useContext(Trucko);
  return (
    <div className="text_bold">
      <p>{homeText}</p>
    </div>
  );
};

export default TextBold;
