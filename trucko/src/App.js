import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StartForum from "./pages/StartForum";
import Ranking from "./pages/Ranking";
import HomeAll from "./pages/HomeAll";
import FormHome from "./pages/FormHome";
import FirstRun from "./pages/FirstRun";
import Exercises from "./pages/Exercises";
import InExecution from "./pages/InExecution";
import News from "./pages/News";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeAll} />
        <Route path="/createAccount" component={FormHome} />
        <Route path="/exercises" component={Exercises} />
        <Route exact path="/caminhada" component={InExecution} />
        <Route path="/firstRun" component={FirstRun} />
        <Route path="/news" component={News} />
        <Route path="/forum" component={StartForum} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
      
    </BrowserRouter>
  );
};

export default App;
