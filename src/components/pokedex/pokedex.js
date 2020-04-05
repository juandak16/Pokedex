import React, { useState, useEffect } from "react";
import axios from "axios";
import { pokemonList } from '../../apiCalls';
import { Pokemon } from "../pokemon/pokemon";
import './pokedex.scss';

export const Pokedex = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonListData, setPokemonListData] = useState(null);

  const data = async () => {
    try {
      const { data: results } = await axios.get(pokemonList(props.offset, 15));
      setPokemonListData(results);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="Pokedex">
      {isLoading ?
        <span>Is loading</span> :
        <div className="Pokedex-container">
          {pokemonListData.results.map((character, index) => (
            <div key={`${character.id}-${character.name}`} className="Pokedex-character">
              {<Pokemon id={props.offset + index} />}
            </div>
          ))}
        </div>
      }
    </div>
  );
};

Pokedex.defaultProps = {
  offset: 1,
};
