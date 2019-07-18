import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
