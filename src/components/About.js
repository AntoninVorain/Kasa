import React from "react";
import { Banner } from "./Banner";
import { DescriptionPanel } from "./DescriptionPanel";
import "./About.scss";

function About() {
  return (
    <>
      <ImageBanner />
      <div className="about__container">
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </>
  );
}

export default About;
