import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Footer from "./Page Layout/Footer";
import Header from "./Page Layout/Header";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Projects from "./Pages/Projects";
import Skill from "./Pages/Skill";

import "./App.css"
const App = () => {
  return (
    <Router>
    <ToastContainer/>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/project" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="*" component={PageNotFound}/>
        </Switch>
        <Footer />
    </Router>
  );
};

export default App;
