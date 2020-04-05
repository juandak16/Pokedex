import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Proptypes from 'prop-types';
import { pokemonDetail } from '../../apiCalls';
import pokeball from '../../img/pokeball.png';
import './pokemon.scss';

export const Pokemon = props => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const data = async () => {
    try {
      const { data: results } = await axios.get(pokemonDetail(props.id));
      setPokemonData(results);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    data();
  }, []);


  return (
    <div className="Pokemon">
      {isLoading ? 
        <span>Is loading</span> :
        <div
          className={`
            Pokemon-container
            background-${pokemonData.types[pokemonData.types.length - 1].type.name}
          `}
        >
          <div className="Pokemon-head">
            <div className="Pokemon-head-id">
              <p>#{pokemonData.id}</p>
            </div>
            <h2 className="Pokemon-head-name">{pokemonData.name}</h2>
          </div>
          <div className="Pokemon-detail">
            <div className="Pokemon-detail-types">
              {pokemonData.types.map(type => (
                <div key={`${pokemonData.id}-${type.type.name}`}>
                  {type.type.name}
                </div>
              ))}
            </div>
            <img
              className="Pokemon-detail-pokeball"
              src={pokeball}
              alt="pokeball decorativve image"
            />
            {
              <img 
                className="Pokemon-detail-image"
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name}
              />
              // <img className="Pokemon-detail-image" src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png`} alt={pokemonData.name} />
            }
          </div>
        </div>
      }
    </div>
  );
};

Pokemon.propTypes = {
  id: Proptypes.number,
};
