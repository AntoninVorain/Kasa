import React from "react";
import "./Banner.scss";

export function Banner({title}) {
  return (
    <div className="banner">
      {/* <img src="https://unsplash.it/800/200" alt="banner" /> */}
      {!title ? "" :  <h2>{title}</h2>}
    </div>
  );
}

