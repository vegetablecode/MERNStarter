import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Contact from "./components/pages/static/contact/Contact";
import About from "./components/pages/static/about/About";
import Landing from "./components/pages/static/landing/Landing";
import Login from "./components/pages/auth/login/Login";
import Register from "./components/pages/auth/register/Register";
import Dashboard from "./components/app/Dashboard";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
