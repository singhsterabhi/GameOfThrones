import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/characters" component={Characters} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
// linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)
// linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)
