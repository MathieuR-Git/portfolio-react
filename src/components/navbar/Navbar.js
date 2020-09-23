import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  let location = useLocation();
  //   let history = useHistory();

  //   console.log("history : ", history);
  return (
    <nav>
      {/* Accueil */}
      {location.pathname === "/" ? (
        <>
          {" "}
          <NavLink activeClassName="active" exact to="/competences">
            Mes compétences
          </NavLink>
          <NavLink activeClassName="active" exact to="/projets">
            Mes projets
          </NavLink>
          <NavLink activeClassName="active" exact to="/contact">
            Me contacter
          </NavLink>
          <NavLink activeClassName="active" exact to="/cv">
            Mon CV
          </NavLink>{" "}
        </>
      ) : (
        <></>
      )}

      {/* Compétences */}
      {location.pathname === "/projets" ? (
        <>
          <NavLink activeClassName="active" exact to="/">
            À propos de moi
          </NavLink>
          <NavLink activeClassName="active" exact to="/competences">
            Mes compétences
          </NavLink>
          <NavLink activeClassName="active" exact to="/contact">
            Me contacter
          </NavLink>
          <NavLink activeClassName="active" exact to="/cv">
            Mon CV
          </NavLink>
        </>
      ) : (
        <></>
      )}

      {/* Projets */}
      {location.pathname === "/competences" ? (
        <>
          <NavLink activeClassName="active" exact to="/">
            À propos de moi
          </NavLink>
          <NavLink activeClassName="active" exact to="/projets">
            Mes projets
          </NavLink>
          <NavLink activeClassName="active" exact to="/contact">
            Me contacter
          </NavLink>
          <NavLink activeClassName="active" exact to="/cv">
            Mon CV
          </NavLink>
        </>
      ) : (
        <></>
      )}

      {/* Contact */}
      {location.pathname === "/contact" ? (
        <>
          <NavLink activeClassName="active" exact to="/">
            À propos de moi
          </NavLink>
          <NavLink activeClassName="active" exact to="/competences">
            Mes compétences
          </NavLink>
          <NavLink activeClassName="active" exact to="/projets">
            Mes projets
          </NavLink>
          <NavLink activeClassName="active" exact to="/cv">
            Mon CV
          </NavLink>
        </>
      ) : (
        <></>
      )}

      {/* CV */}
      {location.pathname === "/cv" ? (
        <>
          <NavLink activeClassName="active" exact to="/">
            À propos de moi
          </NavLink>
          <NavLink activeClassName="active" exact to="/competences">
            Mes compétences
          </NavLink>
          <NavLink activeClassName="active" exact to="/projets">
            Mes projets
          </NavLink>
          <NavLink activeClassName="active" exact to="/contact">
            Me contacter
          </NavLink>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navbar;
