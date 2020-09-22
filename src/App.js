import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import MainLoader from "./components/MainLoader";
import Navigation from "./components/Navigation";
// import Calendar from "./components/Calendar";
// import AboutUs from "./components/AboutUs";

// Components
const Calendar = lazy(() =>
  import("./components/Calendar" /* webpackChunkName: "home-page" */)
);
const AboutUs = lazy(() =>
  import("./components/AboutUs" /* webpackChunkName: "about-us-page" */)
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<MainLoader />}>
        <Switch>
          <Route exact path={routes.home} component={Calendar} />
          <Route path={routes.about} component={AboutUs} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
