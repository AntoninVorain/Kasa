import React, { useEffect, useState } from "react";
import ApartmentCard from "./ApartmentCard.js";
import "./ApartmentGrid.scss";

function ApartmentGrid() {
  const [apartments, setApartments] = useState([])

  useEffect(fetchApartments, [])

function fetchApartments() {
  fetch("./data/logements.json")
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error)
}

  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <ApartmentCard title={apartment.title} imageUrl={apartment.cover} id={apartment.id} />
      ))}
      {/* apartments: {JSON.stringify(apartments)} */}
      {/* 
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard /> */}
      {/* <ApartmentCard title="super appart dans le marais" />
      <ApartmentCard title="16e" />
      <ApartmentCard title="18e" /> */}
    </div>
  );
}

export default ApartmentGrid;
