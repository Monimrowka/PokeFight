import axios from "axios";
import { useState, useEffect } from "react";
import SearchForScores from "../generalComponents/SearchForScores";

export default function FightScores() {
  const [fightScores, setFightScores] = useState([]);
  const [search, setSearch] = useState("");

  //setFightScores
  useEffect(() => {
    const name = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();
    console.log(name);
    axios
      .get(`http://localhost:3010/pokemons/pokemonfights/showfights/${name}`)
      .then((response) => {
        setFightScores(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  return (
    <div>
      <SearchForScores setSearch={setSearch} />
      <br />
      <br />
      {fightScores.map((scores) => {
        const formattedDate = new Date(scores.date).toDateString();
        return (
          <div key={scores._id}>
            <h5>Fight No. {scores.game_id}</h5>
            <h6>Fought on {formattedDate} between:</h6>
            <ul>
              <li>{scores.chosen_pokemon}</li>
              <li>{scores.random_pokemon}</li>
            </ul>
            <h6>
              The winner of this fight was <b>{scores.winner}</b>
            </h6>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
