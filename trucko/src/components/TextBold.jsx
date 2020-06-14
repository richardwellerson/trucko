import React from "react";
import Proptypes from 'prop-types';

const TextBold = ({ props }) => {
  return (
    <div>
      <p className="text_bold">{props}</p>
    </div>
  );
};

export default TextBold;

TextBold.propTypes = {
  props: Proptypes.string,
};
