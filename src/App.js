import React, { Fragment } from "react";
import "./App.css";

import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <Fragment>
      <div className="container has-text-centered">
        <Calendar />
      </div>
    </Fragment>
  );
}

export default App;
