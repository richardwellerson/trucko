import React from "react";
import HomeLogo from "../components/HomeLogo";

const HomeTop = () => {
  return (
    <div>
      <p>Bem-vindo ao</p>
      <HomeLogo className="home_logo" />
      <div>
        <p>
          O clube de benefícios
          <br />
          do caminhoneiro
        </p>
      </div>
    </div>
  );
};

export default HomeTop;
