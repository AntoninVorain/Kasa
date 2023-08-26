import React from "react";
import Navbar from "../components/Navbar";
import { ImageBanner } from "../components/ImageBanner";
import { Banner } from "../components/Banner";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./About.scss";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <ImageBanner />
      <Banner title="Chez vous, partout et ailleurs" />
      <div className="about__container">
        <DescriptionPanel title="Fiabilité" desc="Fiabilité" />
        <DescriptionPanel title="Respect" desc="Respect" />
        <DescriptionPanel title="Service" desc="Service" />
        <DescriptionPanel title="Responsabilité" desc="Responsabilité" />
      </div>
    </>
  );
}

export default About;
