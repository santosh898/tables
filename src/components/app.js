import { h } from "preact";
import { Router } from "preact-router";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Manage from "../routes/manage";

const App = () => (
  <div id="app">
    <Router>
      <Home path="/" />
      <Manage path="/manage" />
    </Router>
  </div>
);

export default App;
