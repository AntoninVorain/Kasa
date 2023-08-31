import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Banner } from "../components/Banner";
import ApartmentGrid from "../components/ApartmentGrid";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  const [apartments, setApartments] = useState([])

  return (
    
      <div>
      <Main>
        <Banner title="Chez vous, partout et ailleurs" />
        {/* <ApartmentGrid /> boucle */}
        <ApartmentGrid />
        {apartments.map((apartment) => (
          <div className="user">
            <h2>{apartment.title}</h2>
          </div>
      ))}
      </Main>
    </div>
  )
}
