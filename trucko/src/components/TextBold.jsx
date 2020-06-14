import React from "react";
import Proptypes from "prop-types";

const TextBold = (props) => {
  return (
    <div>
      <h2 className={props.className}>{props.textBold}</h2>
    </div>
  );
};

export default TextBold;

TextBold.propTypes = {
  props: Proptypes.string,
};
