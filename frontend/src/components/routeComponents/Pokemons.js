import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Battleground from "./Battleground";
import Pokemon from "./Pokemon";

export default function Pokemons() {
  const navigate = useNavigate();
  const [isPokemonLoading, setIsPokemonLoading] = useState(true);
  const [startFight, setStartFight] = useState(true);
  const [isRandomPokemon, setIsRandomPokemon] = useState(false);
  const [random, setRandom] = useState({});
  const [showRandom, setShowRandom] = useState(false);
  const [noMoreChanging, setNoMoreChanging] = useState(false);

  // state for chosen Pokemon by name
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  // backend request to get a Pokemon by name and a random pokemon by id
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

  const randomPokemon = () => {
    axios
      .get(`http://localhost:3010/pokemons/random/`)
      .then((response) => {
        setRandom(response.data);
        //  console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showRandomPokemon = () => setShowRandom(true);
  const showBattleground = () => setStartFight(false);
  const randomPokemonSetter = () => setIsRandomPokemon(true);
  const noMoreRandom = () => setNoMoreChanging(true);

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
          <div>Loading Pokemon of your choice...</div>
        ) : (
          <div className="chosenPokemon">
            {" "}
            <Pokemon version={pokemon} />
            {isRandomPokemon ? (
              ""
            ) : (
              <Button
                id="showRandomPokemon"
                className="btn-warning"
                onClick={() => {
                  randomPokemon();
                  showRandomPokemon();
                  randomPokemonSetter();
                }}
              >
                Fight a radom Pokemon
              </Button>
            )}
          </div>
        )}

        {showRandom ? (
          <div className="randomPokemon">
            <Pokemon version={random} />

            {noMoreChanging ? (
              ""
            ) : (
              <>
                <Button
                  id="otherRandomPokemon"
                  className="btn-warning"
                  onClick={randomPokemon}
                >
                  Chose another Pokemon
                </Button>
                <Button
                  id="pokemonFight"
                  className="btn-danger"
                  onClick={() => {
                    showBattleground();
                    noMoreRandom();
                  }}
                >
                  Fight this Pokemon
                </Button>
              </>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      {startFight ? (
        <div>Waiting to start the fight...</div>
      ) : (
        <Battleground pokemon={pokemon} random={random} />
      )}
    </div>
  );
}
