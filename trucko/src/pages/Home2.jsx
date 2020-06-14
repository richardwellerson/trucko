import React from "react";
import HomeLogo from "../components/HomeLogo";
import TextBold from "../components/TextBold";
import HomeAwards from "../components/HomeAwards";
import "../styles/Home2.css";
import HomeBot2 from "../components/HomeBot2";
import ButtonsHome2 from "../components/ButtonsHome2";
const toBold = "Troque seus pontos por";
const textBottom = "Faça parte deste clube e mostre que você é";
const textBottomSmall = "Rei do asfalto";

const Home2 = () => {
  return (
    <div>
      <div className="home_all2">
        <div>
          <HomeLogo className="home_logo2" />
        </div>
        <TextBold className="text_bold" textBold={toBold} />
        <HomeAwards />
        <HomeBot2 textBottom={textBottom} className="text_bottom_light" textBottomSmall={textBottomSmall} />
        <ButtonsHome2 className="green_button2" />
      </div>
    </div>
  );
};

export default Home2;
