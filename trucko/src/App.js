import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Forum from "./pages/Forum";
import Ranking from "./pages/Ranking";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/ranking" component={Ranking} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
