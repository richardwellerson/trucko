import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Forum from "./pages/Forum";
import StartForum from "./pages/StartForum";
import Ranking from "./pages/Ranking";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home from "./pages/Home";
import FirstRun from './pages/FirstRun';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FirstRun} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/ranking" component={Ranking} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
