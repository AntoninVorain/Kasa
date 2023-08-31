import React from "react";
import Navbar from "../components/Navbar";
import { BannerAbout } from "../components/BannerAbout";
import { DescriptionPanel } from "../components/DescriptionPanel";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "./About.scss";

function About() {
  return (
    <>
      <Main>
      <BannerAbout />
      <div className="about__container">
        <DescriptionPanel title="Fiabilité" desc="Fiabilité" />
        <DescriptionPanel title="Respect" desc="Respect" />
        <DescriptionPanel title="Service" desc="Service" />
        <DescriptionPanel title="Responsabilité" desc="Responsabilité" />
        </div>
      </Main>
    </>
  );
}

export default About;
