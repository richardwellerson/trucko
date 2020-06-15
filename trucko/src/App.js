import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StartForum from "./pages/StartForum";
import Ranking from "./pages/Ranking";
import HomeAll from "./pages/HomeAll";
import FormHome from "./pages/FormHome";
import FirstRun from "./pages/FirstRun";
<<<<<<< HEAD
import Exercises from "./pages/Exercises";
import InExecution from "./pages/InExecution";
import News from "./pages/News";
=======
import Exercises from './pages/Exercises';
import InExecution from './pages/InExecution';
>>>>>>> 101d4db903fb73009031ba416b356207fa145c14
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
<<<<<<< HEAD
        <Route path="/news" component={News} />
=======
>>>>>>> 101d4db903fb73009031ba416b356207fa145c14
        <Route path="/forum" component={StartForum} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
