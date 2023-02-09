import axios from "axios";
import { useState, useEffect } from "react";
import SearchForScores from "./SearchForScores";
import { NavLink } from "react-router-dom";

export default function AllScores() {
  const [fightScores, setFightScores] = useState([]);

  //setFightScores
  useEffect(() => {
    axios
      .get(`http://localhost:3010/pokemons/pokemonfights/showfights/`)
      .then((response) => {
        setFightScores(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <SearchForScores />
      <br />
      <br />
      {fightScores.map((scores) => {
        const formattedDate = new Date(scores.date).toDateString();
        return (
          <div key={scores._id}>
            <h5>Fight No. {scores.game_id}</h5>
            <h6>Fought on {formattedDate} between:</h6>
            <ul>
              <li>
                {" "}
                <NavLink
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`/fightscores/${scores.chosen_pokemon}`}
                >
                  {scores.chosen_pokemon}
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`/fightscores/${scores.random_pokemon}`}
                >
                  {scores.random_pokemon}
                </NavLink>
              </li>
            </ul>
            <h6>
              The winner of this fight was{" "}
              <b>
                <NavLink
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`/fightscores/${scores.winner}`}
                >
                  {scores.winner}
                </NavLink>
              </b>
            </h6>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
