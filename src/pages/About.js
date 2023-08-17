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
        <DescriptionPanel title="Fiabilité" desc="C'est très important" />
        <DescriptionPanel title="Respect" desc="C'est très important" />
        <DescriptionPanel title="Service" desc="C'est très important" />
        <DescriptionPanel title="Responsabilité" desc="C'est très important" />
      </div>
      <Footer />
    </>
  );
}

export default About;
