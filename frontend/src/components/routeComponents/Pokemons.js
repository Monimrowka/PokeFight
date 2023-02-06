import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
// import Battleground from "./Battleground";
import Pokemon from "./Pokemon";
import Battleground2 from "./Battleground2";

export default function Pokemons() {
  const navigate = useNavigate();
  const [isPokemonLoading, setIsPokemonLoading] = useState(true);

  // state for chosen Pokemon by name
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  // backend request to get a Pokemon by name
  useEffect(() => {
    axios
      .get(`http://localhost:3010/pokemons/${name}`)
      .then((response) => {
        setPokemon(response.data);
        //  console.log(response.data)
        setIsPokemonLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  // state for localStorage - if no pokemon then empty object
  const localStoragePokemon = JSON.parse(localStorage.getItem("random")) || {};

  // state for random Pokemon by id
  const [random, setRandom] = useState(localStoragePokemon);

  // backend request to get a different random Pokemon as onClick function
  const otherRandom = () => {
    axios
      .get(`http://localhost:3010/pokemons/random/`)
      .then((response) => {
        setRandom(response.data);
        localStorage.setItem("random", JSON.stringify(response.data));
        //  console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button
        id="navigateBack"
        onClick={() => navigate("/pokemons")}
        className="btn-dark"
      >
        Back to the list
      </Button>
      <div className="pokemons">

        {isPokemonLoading ? (
          <div>Loading Pokemon...</div>
        ) : (
          <div className="chosenPokemon">
            {" "}
            <Pokemon version={pokemon} />
          </div>
        )}

        {/* <Button id="pokemonFight" className="btn-danger">
          FIGHT
        </Button> */}

          <div className="randomPokemon">
            <Pokemon version={random} />
            <Button
              id="otherRandomPokemon"
              className="btn-warning"
              onClick={otherRandom}
            >
              Chose another Pokemon
            </Button>
          </div>   

      </div>
      {/* <Battleground pokemon={pokemon} random={random} /> */}
      {/* {isPokemonLoading ? (
          <div>Loading Battleground...</div>
        ) : (
      <Battleground2 pokemon={pokemon} random={random} />
      )} */}
    </div>
  );
}
