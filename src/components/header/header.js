import React from "react";
import pokeball from "../../img/pokeball.png";

function Header() {
  return (
    <div className="header">
      <img className="pokeball" src={pokeball} alt="img" />
      <h1 className="title">Pokedex</h1>
      <i className="fas fa-sort-amount-up"></i>
    </div>
  );
}

export default Header;
