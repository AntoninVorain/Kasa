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
      <ImageBanner imageUrl={} />
      <div className="about__container">
        <DescriptionPanel title="1" description="" />
        <DescriptionPanel title="2" description="" />
        <DescriptionPanel title="3" description="" />
        <DescriptionPanel title="4" description="" />
      </div>
      <Footer />
    </>
  );
}

export default About;
