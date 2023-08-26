import React from "react";
import "./ErrorPageNotFound.scss";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { Link } from "react-router-dom";

function ErrorPageNotFound() {
  return (
    <>
      <Main>
        <div className="error-page">
          <h1>404</h1>
          <h2>Oops! La page que vous demandez n'existe pas</h2>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </Main>
    </>
  );
}

export default ErrorPageNotFound;
