import React from "react";
import Navbar from "../components/Navbar";
import { ImageBanner } from "../components/ImageBanner";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./About.scss";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <ImageBanner />
      <div className="about__container">
        <DescriptionPanel title=" " description="" />
        <DescriptionPanel title=" " description="" />
        <DescriptionPanel title=" " description="" />
        <DescriptionPanel title=" " description="" />
      </div>
      <Footer />
    </>
  );
}

export default About;
