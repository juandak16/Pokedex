import React, { useState, useEffect } from "react";
import axios from "axios";
import pokeball from "../../img/pokeball.png";

export const Pokemon = props => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoadingpk, setIsLoadingpk] = useState(true);
  const [typepk, setTypepk] = useState(null);

  const data = async () => {
    try {
      const { data: results } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`);
      setPokemon(results);
      setIsLoadingpk(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="pokemon">
      {isLoadingpk && <span>Is loading</span>}
      {!isLoadingpk && (
        <div className={`pk ${typepk}`}>
          <div className="head">
            <div className="content-id">
              <p className="id-pk">#{pokemon.id}</p>
            </div>
            <h2 className="name-pk">{pokemon.name}</h2>
          </div>
          <div className="detail-pk">
            <div className="content-types">
              {pokemon.types.map(type => {
                return (
                  <div key={`${pokemon.id}-${type.type.name}`} className="type">
                    {typepk === null && setTypepk(type.type.name)}
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <img className="pokeball-pk" src={pokeball} alt="img" />
            <img className="img-pk" src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};
