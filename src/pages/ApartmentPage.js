import React, { useEffect, useState } from "react";
import "./ApartmentPage.scss";
import { DescriptionPanel } from "./../components/DescriptionPanel";
import { ImageBanner } from "./../components/ImageBanner";
import { ApartmentHeader } from "./../components/ApartmentHeader";
import { useApartment } from "./../components/useApartment";

function ApartmentPage() {
  const flat = useApartment();

  if (flat == null) return <div>Loading...</div>;
  return (
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" desc={flat.description} />
        <DescriptionPanel
          title="Equipements"
          desc={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
