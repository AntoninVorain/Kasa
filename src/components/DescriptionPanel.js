import React from "react"
import "./DescriptionPanel.scss"

export function DescriptionPanel({title, description}) {
  return (
    <div className="description__panel">
      <p className="description__header">
        <span>Description</span>
        <i className="fa-solid fa-chevron-down"></i>
      </p>
      <p className="description__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius saepe cum
        sequi explicabo alias asperiores quisquam id, maxime quam sunt suscipit
        quaerat corporis quas perspiciatis distinctio impedit ea nesciunt fuga
        consequatur officiis assumenda possimus? Tenetur earum aliquam laudantium
        nesciunt rerum, veniam omnis est, facilis quas odio tempore, quos voluptatum
        totam.
      </p>
    </div>
  );
}