import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StartForum from "./pages/StartForum";
import Ranking from "./pages/Ranking";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home from "./pages/Home";
import HomeAll from "./pages/HomeAll";
import FormHome from "./pages/FormHome";
import FirstRun from "./pages/FirstRun";
import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeAll} />
        <Route exact path="/2" component={Home3} />
        <Route exact path="/3" component={Home2} />
        <Route exact path="/createAccount" component={FormHome} />
        <Route exact path="/firstRun" component={FirstRun} />
        {/* <Route path="/profile" component={Profile} /> */}
        <Route exact path="/forum" component={StartForum} />
        {/* <Route exact path="/support" component={Support} /> */}
        <Route exact path="/ranking" component={Ranking} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
