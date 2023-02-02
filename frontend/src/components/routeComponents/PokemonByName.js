import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
// import RandomPokemon from "./RandomPokemon"
// import Battleground from "./Battleground";

export default function PokemonByName() {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3010/pokemons/${name}`)
      .then((response) => {
        setPokemon(response.data);
        //  console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <div>
    <div className="pokemons">
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
        <Button onClick={() => navigate(-1)} className="btn-dark">
          Back
        </Button>
        {/* <Button className="btn-warning">
          Fight a radom Pokemon
        </Button> */}
      </div>
      {/* <RandomPokemon /> */}
    </div>
    {/* <Battleground /> */}
    </div>
  );
}
