import React, { useEffect, useState } from "react";
import ApartmentCard from "./ApartmentCard.js";
import "./ApartmentGrid.scss";

function ApartmentGrid() {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    fetchApartments()
    
  }, [])

function fetchApartments() {
  fetch("./data/logements.json")
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error)
}

  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <ApartmentCard title={apartment.title} imageUrl={apartment.cover} id={apartment.id} key={apartment.id} />
      ))}
    </div>
  );
}

export default ApartmentGrid;
