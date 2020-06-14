import React from "react";
import Proptypes from 'prop-types';
import '../styles/Home.css';

const TextLight = ({ props }) => {
  return (
    <div>
      {props.map((word) => (
        <p className="text_light">{word}</p>
      ))}
    </div>
  );
};

export default TextLight;

TextLight.propTypes = {
  props: Proptypes.string,
};
