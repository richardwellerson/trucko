import React, { useContext } from "react";
import HomeLogo from "../components/HomeLogo";
import TextBold from "../components/TextBold";
import TextLight from "../components/TextLight";
import Trucko from "../context";
import "../styles/Home.css";

const Home2 = () => {
  const { setHomeText, setHomeLight } = useContext(Trucko);
  setHomeText("Troque seus pontos por");
  setHomeLight(["Smartphones", "Recarga celular", "Serviços", "Eletrodomésticos", "Roupas e muito mais"]);
  return (
    <div>
      <div className="home_all">
        <HomeLogo />
      </div>
      <div>
        <TextBold />
        <TextLight />
      </div>
    </div>
  );
};

export default Home2;
