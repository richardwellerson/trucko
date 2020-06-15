import React from "react";
import HomeLogo from "../components/HomeLogo";
import TextBold from "../components/TextBold";
import HomeAwards2 from "../components/HomeAwards2";
import "../styles/Home3.css";
import HomeBot2 from "../components/HomeBot2";
const toBold = "Acumule pontos por";
const textBottom = "OPÇÃO EXTRA";
const textBottomSmall =
  "O acesso premium te dá pontos em dobro para a troca pelos prêmios e benefícios extras como promoções exclusivas";

const Home3 = () => {
  return (
    <div>
      <div className="home_all2">
        <div>
          <HomeLogo className="home_logo2" />
        </div>
        <TextBold className="text_bold_small" textBold={toBold} />
        <HomeAwards2 />
        <HomeBot2 textBottom={textBottom} className="text_bottom_light2" textBottomSmall={textBottomSmall} />
      </div>
    </div>
  );
};

export default Home3;
