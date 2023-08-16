import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Banner } from "../components/Banner";
import ApartmentGrid from "../components/ApartmentGrid";
import Main from "../components/Main";
import Footer from "../components/Footer";
// import "./App.scss";

export default function Home() {
  const [apartments, setApartments] = useState([])

  // useEffect(() => {
  //   fetch("./data/logements.json")
  //     .then((response) => response.json())
  //     .then((datas) => {
  //       console.log(datas)
  //       setApartments(datas)
  //     }).catch((error)=>console.log(error))
  // },[])


  return (
    
      <div>
      <Navbar />
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
      <Footer />
    
    </div>
  )
}
