import React from "react";
import "./Main.scss";
function Main(props) {
  // const children = props.children
  // console.log("children: ", children)
  return <div className="main">{props.children}</div>;
}

export default Main;

