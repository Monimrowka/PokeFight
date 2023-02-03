export default function Battleground({ pokemon, random }) {

  return (
  <div>
    <p><b>{pokemon.name?.english}'s</b> attack power is <b>{pokemon.base?.Attack}</b> and it has <b>{pokemon.base?.HP}</b> health points.</p>
    <p><b>{random.name?.english}'s</b> attack power is <b>{random.base?.Attack}</b> and it has <b>{random.base?.HP}</b> health points.</p>
    <p>The winner is: I can not do math 🤷‍♀️</p>
  </div>
  );
}
