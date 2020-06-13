import React, { useState } from "react";
import PropTypes from "prop-types";
import Trucko from "./index";

const MyContext = ({ children }) => {
  const [name, setName] = useState("Richard");
  const toTrucko = {
    name,
    setName,
  };
  return <Trucko.Provider value={toTrucko}>{children}</Trucko.Provider>;
};

export default MyContext;

MyContext.propTypes = {
  children: PropTypes.node.isRequired,
};
