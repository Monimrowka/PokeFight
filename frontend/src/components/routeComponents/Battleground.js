export default function Battleground({ pokemon, random }) {
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
  }

  let theFirstAttacker;
  switch (Math.floor(Math.random() * 2) + 1) {
    case 1:
      theFirstAttacker = pokemon.name?.english;
      break;
    default:
      theFirstAttacker = random.name?.english;
  }

  return (
    <div className="battleground">
      <p>
        {theFirstAttacker} {pokeState}
      </p>
      <p>{theFirstAttacker} attacks first!</p>
      <p>
        <b>{pokemon.name?.english}'s</b> attack power is{" "}
        <b>{pokemon.base?.Attack}</b> and it has <b>{pokemon.base?.HP}</b>{" "}
        health points.
      </p>
      <p>
        <b>{random.name?.english}'s</b> attack power is{" "}
        <b>{random.base?.Attack}</b> and it has <b>{random.base?.HP}</b> health
        points.
      </p>
      <p>The winner is: I can not do math 🤷‍♀️</p>
    </div>
  );
}
