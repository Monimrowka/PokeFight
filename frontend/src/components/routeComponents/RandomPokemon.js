import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

export default function RandomPokemon() {
  const [pokemon, setPokemon] = useState({});  
  const id = Math.floor(Math.random() * 809) + 1;

  useEffect(() => {
    axios
      .get(`http://localhost:3010/pokemons/${id}`)
      .then((response) => {
        setPokemon(response.data);
        //  console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
   
      <div className="chosenPokemon">
        <h3>{pokemon.name?.english}</h3>
        <p>Type:</p>
        <ul>
          {pokemon.type?.map((type) => (
            <li key={type}>{type}</li>
          ))}
        </ul>
        <p>Base:</p>
        <ul>
          <li>HP: {pokemon.base?.HP}</li>
          <li>Attack: {pokemon.base?.Attack}</li>
          <li>Defense: {pokemon.base?.Defense}</li>
          <li>Sp. Attack: {pokemon.base?.["Sp. Attack"]}</li>
          <li>Sp. Defense: {pokemon.base?.["Sp. Defense"]}</li>
          <li>Speed: {pokemon.base?.Speed}</li>
        </ul>
        <Button className="btn-warning">
         Chose another Pokemon
        </Button>
    </div>
  );
}
