import React from "react";

const HomeBot2 = (props) => {
  return (
    <div className="home2_inferior">
      <div className="text_bottom_bold">
        <p>{props.textBottom}</p>
      </div>
      <div className={props.className}>
        <p>{props.textBottomSmall}</p>
      </div>
    </div>
  );
};

export default HomeBot2;
