import React from "react";
import pokeball from "../../img/pokeball.png";
import './header.scss';

function Header() {
  return (
    <div className="Header">
      <img className="Header-pokeball" src={pokeball} alt="img" />
      <h1 className="Header-title">Pokedex</h1>
    </div>
  );
}

export default Header;
