import React from "react";
import "./BannerAbout.scss";

export function BannerAbout({title}) {
  return (
    <div className="banner-about">
      {/* <img src="https://unsplash.it/800/200" alt="banner" /> */}
      {!title ? "" :  <h2>{title}</h2>}
    </div>
  );
}

