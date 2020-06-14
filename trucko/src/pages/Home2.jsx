import React from "react";
import HomeLogo from "../components/HomeLogo";
import TextBold from "../components/TextBold";
import "../styles/Home.css";

const awards = ["Smartphones", "Recarga celular", "Serviços", "Eletrodomésticos", "Roupas e muito mais"];
const toBold = "Troque seus pontos por";

const Home2 = () => {
  return (
    <div>
      <div className="home_all">
        <HomeLogo />
      </div>
      <div>
        <TextBold textBold={toBold} />
        {awards.map((word) => (
          <p>{word}</p>
        ))}
      </div>
    </div>
  );
};

export default Home2;
