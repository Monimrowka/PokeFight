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

  //variable to store previously fetched pokemon
  const [prevRandom, setPrevRandom] = useState({});

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
    setPrevRandom(random);
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

  // Function to return to the previous Pokemon
  const returnToPrevious = () => {
    setRandom(prevRandom);
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
                {prevRandom !== null ? (
                  <Button
                    id="returnToPrevious"
                    className="btn-warning"
                    onClick={returnToPrevious}
                  >
                    {" "}
                    Latest Pokemon{" "}
                  </Button>
                ) : null}

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
