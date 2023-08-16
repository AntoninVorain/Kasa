import React, { useState } from "react"
import "./DescriptionPanel.scss"

export function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const showContent = () => {
    setIsContentVisible(!isContentVisible)
  }
  const contentClass = isContentVisible ? "" : "hidden"
  return (
    <div className="description__panel">
      <p className="description__header">
        <span>{props.title}</span>
        <i className="fa-solid fa-chevron-up" onClick={showContent}></i>
      </p>
      {isContentVisible ? "visible" : "hidden"}
      <p className="description__content">{props.desc}</p>
    </div>
  );
}