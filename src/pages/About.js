import React from "react";
import { Banner } from "../components/Banner";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./About.scss";

function About() {
  return (
    <>
      <Banner />
      <div className="about__container">
        <DescriptionPanel title=" " description="" />
        <DescriptionPanel title=" " description="" />
        <DescriptionPanel title=" " description="" />
        <DescriptionPanel title=" " description="" />
      </div>
    </>
  );
}

export default About;
