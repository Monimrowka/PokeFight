import axios from "axios";
import { useState, useEffect } from "react";
import SearchForScores from "../generalComponents/SearchForScores";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
export default function FightScores() {
  const [fightScores, setFightScores] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    navigate(`?page=${currentPage + 1}`);
  };
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
    navigate(`?page=${currentPage - 1}`);
  };
  //setFightScores
  useEffect(() => {
    const name = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();

    axios
      // .get(
      //   `http://localhost:3010/pokemons/pokemonfights/showfights/${name}`
      // )
      .get(
        `http://localhost:3010/pokemons/pokemonfights/showfights?page=${currentPage}`
      )
      .then((response) => {
        setFightScores(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  return (
    <div>
      <SearchForScores setSearch={setSearch} />
      <br />
      {/* <br /> */}
      <p className="text-center">
        {`Page ${currentPage}`} of{" "}
        {Math.ceil(fightScores.totalFights / fightScores.limit)}
      </p>
      {fightScores.currentFights?.map((scores) => {
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
      {/* <p className="text-center">
        {`Page ${currentPage}`} of{" "}
        {Math.ceil(fightScores.totalFights / fightScores.limit)}
      </p>
      <Table striped bordered hover>
        <thead className="table-head">
          <tr>
            <th>Fight no:</th>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Winner</th>
            <th>Fought on</th>
          </tr>
        </thead>
        <tbody>
          {fightScores.currentFights?.map((scores) => {
            const formattedDate = new Date(scores.date).toDateString();
            return (
              <tr key={scores._id}>
                <td>{scores.game_id}</td>
                <td>{scores.chosen_pokemon}</td>
                <td>{scores.random_pokemon}</td>
                <td>{scores.winner}</td>
                <td>{formattedDate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}
      <div className="d-flex flex-direction-row justify-content-center mt-3">
        <button
          onClick={handlePrevious}
          className="prev-next-button"
          disabled={currentPage === 1}
        >
          &lt;&lt;
        </button>
        <button
          onClick={handleNext}
          className="prev-next-button"
          disabled={
            currentPage ===
            Math.ceil(fightScores.totalFights / fightScores.limit)
          }
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
}
