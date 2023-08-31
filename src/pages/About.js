import React, { useEffect, useState } from "react";
import { BannerAbout } from "../components/BannerAbout";
import { DescriptionPanel } from "../components/DescriptionPanel";
import Main from "../components/Main";
import "./About.scss";

function About() {
  const [abouts, setAbouts] = useState([])
  
  useEffect(() => {
    fetchAbouts()
    
  }, [])
  function fetchAbouts() {
    fetch("./data/about.json")
      .then((res) => res.json())
      .then((res) => setAbouts(res))
      .catch(console.error)
  }

  return (
    <>
      <Main>
      <BannerAbout />
        <div className="about__container">
          
          {abouts.map((about) => (
          <DescriptionPanel title={about.title} desc={about.description} id={about.id} key={about.id} />
          ))}
        
        </div>
      </Main>
    </>
  );
}

export default About;
