import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";

export default function Battleground({ pokemon, random }) {
  const [isResult, setIsResult] = useState(true);
  const [fightSaved, setFightSaved] = useState(false);
  const [winner, setWinner] = useState();
  const navigate = useNavigate();

  let pokeState;
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      pokeState = "is very angry and ready to fight!";
      break;
    case 2:
      pokeState = "is in a fighting mood today and he's attacking right away!";
      break;
    default:
      pokeState =
        "behaves inconspicuously, but only to lull the vigilance of the opponent. It attacks unexpectedly!";
      break;
  }

  let firstPokemon;
  let secondPokemon;
  const getFirstAttacker = () => {
    if (pokemon?.base?.Speed > random?.base?.Speed) {
      firstPokemon = pokemon;
      secondPokemon = random;
    } else if (pokemon?.base?.Speed < random?.base?.Speed) {
      firstPokemon = random;
      secondPokemon = pokemon;
    }
  };
  getFirstAttacker();

  // const [lifeOfFirst, setLifeOfFirst] = useState(firstPokemon.base?.HP)
  // const [lifeOfSecond, setLifeOfSecond] = useState(secondPokemon.base?.HP)

  let lifeOfFirst = firstPokemon.base?.HP;
  let lifeOfSecond = secondPokemon.base?.HP;

  const attackOfFirst = firstPokemon.base?.Attack - secondPokemon.base?.Defense;
  const attackOfSecond =
    secondPokemon.base?.Attack - firstPokemon.base?.Defense;

  const showResult = () => {
    setIsResult(false);
  };

  const fight = () => {
    let isFighting = true;
    while (isFighting) {
      attackOfFirst > 0 ? (lifeOfSecond -= attackOfFirst) : (lifeOfSecond -= 0);
      console.log(
        `Attack of ${firstPokemon.name?.english} is ${attackOfFirst}`
      );
      console.log(
        `Life of ${secondPokemon.name?.english} is now ${lifeOfSecond}`
      );
      if (lifeOfSecond <= 0) {
        isFighting = false;
        setWinner(firstPokemon.name?.english);
        break;
      }
      attackOfSecond > 0 ? (lifeOfFirst -= attackOfSecond) : (lifeOfFirst -= 0);
      console.log(
        `Attack of ${secondPokemon.name?.english} is ${attackOfSecond}`
      );
      console.log(
        `Life of ${firstPokemon.name?.english} is now ${lifeOfFirst}`
      );
      if (lifeOfFirst <= 0) {
        isFighting = false;
        setWinner(secondPokemon.name?.english);
        break;
      }
    }
  };

  let gameId;
  const saveFight = () => {
    axios
      .get("http://localhost:3010/pokemons/pokemonfights/showfights")
      .then((response) => {
        gameId = response.data[response.data.length - 1].game_id;
      })
      .then(() => {
        axios
          .post("http://localhost:3010/pokemons/pokemonfights/savefight", {
            game_id: gameId + 1,
            chosen_pokemon: pokemon.name?.english,
            random_pokemon: random.name?.english,
            winner: winner,
          })
          .then((res) => setFightSaved(true));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <p>
        <b>{firstPokemon.name?.english}</b> {pokeState}
      </p>

      {isResult ? (
        <div>The fight goes on...</div>
      ) : (
        <div>
          <p> 
            After a spectacular and exhausting fight taking place in the back
            room, the winner of this skirmish is... <b>{winner}</b>!{" "}
          </p>
        </div>
      )}
      <br/>
      {isResult ? (
        <Button
          className="btn-warning"
          onClick={() => {
            fight();
            showResult();
          }}
        >
          Who won?
        </Button>
      ) : (
        <>
          <p>Congratulations!</p>

          {fightSaved ? (
            <Button id="fightSaved" className="btn-light">
              Fight saved
            </Button>
          ) : (
            <Button
              id="saveTheFight"
              onClick={saveFight}
              className="btn-warning"
            >
              Save the fight
            </Button>
          )}

          <Button
            id="navigateBack"
            onClick={() => navigate("/pokemons")}
            className="btn-dark"
          >
            Back to the list of all Pokemons
          </Button>
        </>
      )}
    </Container>
  );
}
