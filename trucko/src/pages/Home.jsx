import React from "react";
import HomeTop from "../components/HomeTop";
import TextBold from "../components/TextBold";
import TextLight from "../components/TextLight";
import HomeBot from "../components/HomeBot";
import "../styles/Home.css";

const toBold = "Acumule pontos e troque por prêmios";

const Home = () => {
  return (
    <div className="home_all">
      <HomeTop />
      <TextBold textBold={toBold} />
      <TextLight textLight="O App que te ajuda a ter uma vida melhor e ainda te dá prêmios por isso" />
      <HomeBot />
    </div>
  );
};

export default Home;
