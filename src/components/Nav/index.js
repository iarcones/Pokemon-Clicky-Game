import React from "react";
import "./style.css";

function Nav(props) {
  return (

    <nav className="nav">
      <ul>
        <li><span>Pokemon Clicky Game</span></li>
        <li id="message"><strong>{props.message}</strong></li>
        <li>Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
    </nav>
  )
}
export default Nav;
