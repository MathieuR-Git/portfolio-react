import React, { Component } from "react";
import "./AboutMe.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <h2>- À PROPOS DE MOI -</h2>
        <div>
          <p>Je m'appelle Mathieu REVERSEZ,</p>
          <p>
            Je suis un développeur Web, Front-End et Back-End enthousiaste et
            curieux. J'ai la chance de faire un métier qui me passionne.
          </p>
          <p>
            Intéressé par tout ce qui touche à mon domaine, j’effectue une
            veille quotidienne concernant les nouvelles technologies web et le
            design.
          </p>
          <p>
            Venez consulter <a href="/">mes compétences</a> et{" "}
            <a href="/">mes projets</a>.
          </p>
        </div>
      </div>
    );
  }
}
