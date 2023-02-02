import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";

export default function RandomPokemon() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3010/pokemons/random/${id}`)
      .then((response) => {
        setPokemon(response.data);
        //  console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onClick = () => {
    axios
      .get(`http://localhost:3010/pokemons/random/${id}`)
      .then((response) => {
        setPokemon(response.data);
        //  console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      <Button className="btn-warning" onClick={onClick}>
        Chose another Pokemon
      </Button>
    </div>
  );
}
