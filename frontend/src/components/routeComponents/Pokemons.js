import PokemonByName from "./PokemonByName";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import RandomPokemon from "./RandomPokemon";
import Battleground from "./Battleground";

export default function Pokemons() {
  const navigate = useNavigate();

  // state for Pokemon by name
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  // backend request to get a Pokemon by name
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

  // state for random Pokemon by id
  const [random, setRandom] = useState(localStoragePokemon);

  //state for button showing battleground
  const [showBattleground, setShowBattleground] = useState(false);
  const battlegroundOn = () => setShowBattleground(true);

  // backend request to get a random Pokemon as onClick function
  const showRandom = () => {
    axios
      .get(`http://localhost:3010/pokemons/random/`)
      .then((response) => {
        setRandom(response.data);
        // setShowRandom(true)
        localStorage.setItem("random", JSON.stringify(response.data))
        //  console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

   //saving the random pokemon in localstorage 
   const localStoragePokemon = JSON.parse(localStorage.getItem("random")) || {};

  return (
    <div>
      <Button
        id="navigateBack"
        onClick={() => navigate(-1)}
        className="btn-dark"
      >
        Back to the list
      </Button>
      <div className="pokemons">
        <div className="chosenPokemon">
          <PokemonByName pokemon={pokemon} />
          <Button
            id="showRandomPokemon"
            className="btn-warning"
            onClick={showRandom}
          >
            Fight a radom Pokemon
          </Button>
        </div>

        {random.id ? (
          <>
            <Button
              id="pokemonFight"
              className="btn-danger"
              onClick={battlegroundOn}
            >
              FIGHT
            </Button>
            <div className="randomPokemon">
              <RandomPokemon random={random} />
              <Button
                id="otherRandomPokemon"
                className="btn-warning"
                onClick={showRandom}
              >
                Chose another Pokemon
              </Button>
            </div>
          </>
        ) : null}

      </div>

      {showBattleground ? (
        <Battleground pokemon={pokemon} random={random} />
      ) : null}
    </div>
  );
}
