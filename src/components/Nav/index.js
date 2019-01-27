import React from "react";
import "./style.css";

function Nav(props) {
  return (

    <nav className="nav">
      <ul>
        <li><span>Pokemon Clicky Game</span></li>
        <li>{props.message}</li>
        <li>Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
    </nav>
  )
}
export default Nav;
