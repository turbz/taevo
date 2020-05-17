import React from "react";
import ReactGA from "react-ga";
import LandingPage from "../../pages/LandingPage/LandingPage";

import "./App.css";

ReactGA.initialize(process.env.GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="Taevo">
      <LandingPage />
    </div>
  );
}

export default App;
