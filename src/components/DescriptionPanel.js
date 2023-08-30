import React, { useState } from "react";
import "./DescriptionPanel.scss";

export function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const contentClass =
    (isContentVisible ? "visible" : "hidden") + " description__content";
  const chevronClass =
    (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";

  //   $(".rotate").click(function(){
  //     $(this).toggleClass("down");
  // });

  return (
    <div className="description__panel">
      <p className="description__header" onClick={showContent}>
        <span>{props.title}</span>
        <i
          className={
            "chevronClass rotate" + (isContentVisible === true ? "down" : "up")
          }
        ></i>
      </p>

      <p className={contentClass}>{props.desc}</p>
    </div>
  );
}
