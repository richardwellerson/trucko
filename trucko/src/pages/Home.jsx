import React from "react";
import HomeTop from "../components/HomeTop";
import TextBold from "../components/TextBold";
import TextLight from "../components/TextLight";
import HomeBot from "../components/HomeBot";
import "../styles/Home.css";
import NextButton from "../components/NextButton";

const toBold = "Acumule pontos e troque por prêmios";
const toLight = "O App que te ajuda a ter uma vida melhor e ainda te dá prêmios por isso";

const Home = () => {
  return (
    <div className="home_all">
      <HomeTop />
      <TextBold textBold={toBold} />
      <TextLight textLight={toLight} />
      <HomeBot />
    </div>
  );
};

export default Home;
