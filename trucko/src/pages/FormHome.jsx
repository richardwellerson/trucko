import React from "react";
import FormHomeComponent from "../components/FormHomeComponent";
import HeaderForm from "../components/HeaderForm";
import ButtonForm from "../components/ButtonForm";

import "../styles/FormHome.css";

const FormHome = () => {
  return (
    <>
      <div className="form_home">
        <HeaderForm />
        <FormHomeComponent />
        <ButtonForm />
      </div>
    </>
  );
};

export default FormHome;
