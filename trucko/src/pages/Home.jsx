import React from "react";
import HomeTop from "../components/HomeTop";
import HomeMid from "../components/HomeMid";
import HomeBot from "../components/HomeBot";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home_all">
      <HomeTop />
      <HomeMid />
      <HomeBot />
    </div>
  );
};

export default Home;
