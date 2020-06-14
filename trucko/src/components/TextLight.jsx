import React from "react";
import Proptypes from 'prop-types';
import '../styles/Home.css';

const TextLight = (props) => {
  return (
    <div>
      <p className="text_light">{props.textLight}</p>
    </div>
  );
};

export default TextLight;

TextLight.propTypes = {
  textLight: Proptypes.string,
};
