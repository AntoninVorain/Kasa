import React from "react"
import "./ApartmentCard.scss"
import { Link } from "react-router-dom"

function ApartmentCard(props) {
  return (
    <Link to='/flat' state={{apartmentId : props.id}}>
      <div className="apartment">
        <img className="apartment__card__image" src={props.imageUrl} alt="" />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  )
}

export default ApartmentCard