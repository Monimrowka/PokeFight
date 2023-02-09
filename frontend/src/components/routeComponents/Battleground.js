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

  let lifeOfFirst = firstPokemon.base?.HP;
  let lifeOfSecond = secondPokemon.base?.HP;
  const [stateLifeOfFirst, setStateLifeOfFirst] = useState([lifeOfFirst]);
  const [stateLifeOfSecond, setStateLifeOfSecond] = useState([lifeOfSecond]);

  let attackOfFirst =
    firstPokemon.base?.Attack -
    Math.ceil(firstPokemon.base?.Defense / secondPokemon.base?.Attack);
  let attackOfSecond =
    secondPokemon.base?.Attack -
    Math.ceil(secondPokemon.base?.Defense / firstPokemon.base?.Attack);

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
      setStateLifeOfSecond([...stateLifeOfSecond, lifeOfSecond]);
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
      setStateLifeOfFirst([...stateLifeOfFirst, lifeOfFirst]);
      if (lifeOfFirst <= 0) {
        isFighting = false;
        setWinner(secondPokemon.name?.english);
        break;
      }
    }
  };

  // console.log(`The life of Second pokemon is ${stateLifeOfSecond}`)
  // console.log(`The life of First pokemon is ${stateLifeOfFirst}`)

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
          <span>
            {firstPokemon.name?.english}'s final attack power is {attackOfFirst}
            . After it deals damage to {secondPokemon.name?.english}, it stays
            on {stateLifeOfSecond[1]} HP.
            <br />
            Now it's {secondPokemon.name?.english} time to attack!
            <br />
            It's final attack power is {attackOfSecond}. After it deals damage
            to {firstPokemon.name?.english}, it stays on {stateLifeOfFirst[1]}{" "}
            HP.
            <br />
            <br /> 
            
              {stateLifeOfSecond.map((value) => {
                return <p key={Math.random()}>{value >= 0 ? value : 0}</p>;
              })}
           
          </span>
          <br />
          <span>
            {" "}
            The Life of {firstPokemon.name?.english} is:
            <ul>
              {stateLifeOfFirst.map((value) => {
                return <li key={Math.random()}>{value >= 0 ? value : 0}</li>;
              })}
            </ul>
          </span>
          After a spectacular and exhausting fight taking place in the back
          room, the winner of this skirmish is... <b>{winner}</b>!{" "}
        </div>
      )}
      <br />
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
