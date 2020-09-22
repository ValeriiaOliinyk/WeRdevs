import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes";
import "./App.css";

// Components
import Navigation from "./components/Navigation";
import Calendar from "./components/Calendar";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path={routes.home} component={Calendar} />
        <Route path={routes.about} component={AboutUs} />
        <Redirect to={routes.home} />
      </Switch>
    </>
  );
}

export default App;
