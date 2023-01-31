import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

export default function PokemonById() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

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
    <div>
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
    </div>
  );
}
