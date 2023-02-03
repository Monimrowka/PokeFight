export default function PokemonByName({ pokemon }) {
  return (
    <div className="chosenPokemon">
      <h3>{pokemon.name?.english}</h3>
      <p>Type:</p>
      <ul>
        {pokemon.type?.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
      <p>Base:</p>
      <ul>
        <li>HP: {pokemon.base?.HP}</li>
        <li>Attack: {pokemon.base?.Attack}</li>
        <li>Defense: {pokemon.base?.Defense}</li>
        <li>Sp. Attack: {pokemon.base?.["Sp. Attack"]}</li>
        <li>Sp. Defense: {pokemon.base?.["Sp. Defense"]}</li>
        <li>Speed: {pokemon.base?.Speed}</li>
      </ul>
    </div>
  );
}
