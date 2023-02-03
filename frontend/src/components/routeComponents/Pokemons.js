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

  //state for button showing random Pokemon
  const [showRandom, setShowRandom] = useState(false);
  const onClick = () => setShowRandom(true);

  // state for random Pokemon by id
  const [random, setRandom] = useState({});
  const { id } = useParams();

  // backend request to get a random Pokemon
  useEffect(() => {
    axios
      .get(`http://localhost:3010/pokemons/random/${id}`)
      .then((response) => {
        setRandom(response.data);
        //  console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // backend request to get a different random Pokemon as onClick function
  const otherRandom = () => {
    axios
      .get(`http://localhost:3010/pokemons/random/${id}`)
      .then((response) => {
        setRandom(response.data);
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
        onClick={() => navigate(-1)}
        className="btn-dark"
      >
        Back
      </Button>
      <div className="pokemons">
        <div className="chosenPokemon">
            <PokemonByName pokemon={pokemon} />
            <Button id="showRandomPokemon" className="btn-warning" onClick={onClick}>
                Fight a radom Pokemon
            </Button>
        </div>
      {showRandom ? (
        <div className="randomPokemon">
          <RandomPokemon random={random} />
          <Button id="otherRandomPokemon" className="btn-warning" onClick={otherRandom}>
            Chose another Pokemon
          </Button>
        </div>
      ) : null}
      </div>
      <Battleground pokemon={pokemon} random={random}/>
    </div>
  );
}
