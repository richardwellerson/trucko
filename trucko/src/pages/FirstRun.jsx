import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import StartButton from "../components/StartButton";
import StartDay from "../components/StartDay";
import Feels from "../components/Feels";
import Footer from "../components/Footer";
import "../styles/FirstRun.css";

const FirstRun = () => {
  return (
    <div className="first_run_all">
      <Header />
      <Welcome />
      <StartDay />
      <Feels />
      <StartButton />
      <Footer />
    </div>
  );
};

export default FirstRun;
