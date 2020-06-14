import React from "react";

const FormHomeComponent = () => {
  return (
    <form className="form_register">
      <label className="form_label" htmlFor="fname">
        Nome
      </label>
      <br />
      <input type="text" id="fname" name="fname" />
      <br />
      <label htmlFor="nickname">Apelido</label>
      <br />
      <input type="text" id="lname" name="lname" />
      <br />
      <label htmlFor="phone">Celular</label>
      <br />
      <input type="text" id="fname" name="fname" />
      <br />
      <label htmlFor="email">E-mail</label>
      <br />
      <input type="text" id="fname" name="fname" />
      <br />
      <label htmlFor="password">Senha</label>
      <br />
      <input type="password" id="password" name="password" />
      <br />
      <label htmlFor="confirm_password">Confirmar senha</label>
      <br />
      <input type="password" id="confirm_password" name="confirm_password" />
    </form>
  );
};

export default FormHomeComponent;
