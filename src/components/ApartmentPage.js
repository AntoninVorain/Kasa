import React from "react";
import "./ApartmentPage.scss";
import { DescriptionPanel } from "./DescriptionPanel";
import { ImageBanner } from "./ImageBanner";
import { ApartmentHeader } from "./ApartmentHeader";

function ApartmentPage() {
  return (
    <div className="apartment-page">
      <ImageBanner />      
      <ApartmentHeader />
      <div className="apartment__description__area">
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </div>
  );
}

export default ApartmentPage;
