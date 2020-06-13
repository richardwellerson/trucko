import React, { useContext } from "react";
import HomeTop from "../components/HomeTop";
import TextBold from "../components/TextBold";
import TextLight from "../components/TextBold";
import HomeBot from "../components/HomeBot";
import Footer from "../components/Footer";
import Trucko from "../context";
import "../styles/Home.css";

const Home = () => {
  const { setHomeText, homeText, setHomeLight } = useContext(Trucko);
  // setHomeText("Acumule pontos e troque por prêmios");
  setHomeLight(["O App que te ajuda a ter uma vida melhor e ainda te dá prêmios por isso"]);
  return (
    <div className="home_all">
      <HomeTop />
      {/* <TextBold /> */}
      <TextLight />
      <HomeBot />
    </div>
  );
};

export default Home;
