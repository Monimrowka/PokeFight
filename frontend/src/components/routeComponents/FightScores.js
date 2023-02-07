import SearchForScores from "../generalComponents/SearchForScores";

export default function FightScores({ fightScores }) {
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
              <li>{scores.chosen_pokemon}</li>
              <li>{scores.random_pokemon}</li>
            </ul>
            <h6>The winner of this fight was {scores.winner}</h6>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
