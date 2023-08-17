import React, { useEffect, useState } from "react";
import "./ApartmentPage.scss";
import { DescriptionPanel } from "./../components/DescriptionPanel";
import { ImageBanner } from "./../components/ImageBanner";
import { ApartmentHeader } from "./../components/ApartmentHeader";
import { useLocation } from "react-router-dom";

function ApartmentPage() {
  const location = useLocation()

  const [flat, setFlat] = useState(null)
  
  useEffect(fetchApartmentData, [])
  function fetchApartmentData() {
    fetch("./data/logements.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.filter((flat) => flat.id === location.state.apartmentId)
        setFlat(flat)
      })
    .catch(console.error)
  }
  
  if(flat == null) return <div>loading...</div>
  return (
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} />      
      <ApartmentHeader flat={flat} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" desc={flat.description} />
        <DescriptionPanel
          title="Equipements"
          desc={flat.equipments.map((eq, i) =>(
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
