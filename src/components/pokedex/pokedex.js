import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon } from "../pokemon/pokemon";

export const Pokedex = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState(null);
  const [offset, setOffSet] = useState(152);

  const data = async () => {
    try {
      const { data: results } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=25`);
      setApiResponse(results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <div className="pokedex">
      <div className="pokedex-container">
        {isLoading && <span>Is loading</span>}
        {!isLoading && (
          <div className="pokedex-characters">
            {apiResponse.results.map((character, i) => {
              return (
                <div key={`${character.id}-${character.name}`} className="pokedex-character">
                  {<Pokemon id={offset + i} />}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
