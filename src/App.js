import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import AboutMe from "./components/aboutMe/AboutMe";
import Abilities from "./components/abilities/Abilities";
import Contact from "./components/contact/Contact";
import CV from "./components/cv/CV";
import Projects from "./components/projects/Projects";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Navbar />
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/competences" component={Abilities} />
        <Route path="/contact" component={Contact} />
        <Route path="/cv" component={CV} />
        <Route path="/projets" component={Projects} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  );
}

export default App;
