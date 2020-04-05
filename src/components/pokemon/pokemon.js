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
    <div className="pokemon">
      {isLoading ? 
        <span>Is loading</span> :
        <div className={`pk background-${pokemonData.types[0].type.name}`}>
          <div className="head">
            <div className="content-id">
              <p className="id-pk">#{pokemonData.id}</p>
            </div>
            <h2 className="name-pk">{pokemonData.name}</h2>
          </div>
          <div className="detail-pk">
            <div className="content-types">
              {pokemonData.types.map(type => (
                <div key={`${pokemonData.id}-${type.type.name}`} className="type">
                  {type.type.name}
                </div>
              ))}
            </div>
            <img className="pokeball-pk" src={pokeball} alt="pokeball decorativve image" />
            {
              <img 
                className="img-pk"
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name}
              />
              //<img className="img-pk" src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt="" />
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
