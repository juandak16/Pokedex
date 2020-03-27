import React, { useState, useEffect } from "react";
import axios from "axios";

export const Pokemons = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect( async () => {
    try {
      const { data: results } = await axios.get('https://rickandmortyapi.com/api/character/')
      setApiResponse(results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    };
  }, []);

  return (
    <div className="Pokemons">
      <div className="Pokemons-container">
        {isLoading &&
          <span>Is loading</span>
        }
        {!isLoading &&
          <div className="Pokemons-characters">
            {apiResponse.results.map((character) => {
              return (
                <div key={`${character.id}-${character.name}`} className="Pokemons-character">
                  {character.name}
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
};
