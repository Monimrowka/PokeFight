export default function RandomPokemon({ random }) {
  return (
    <div className="randomPokemon">
      <h3>{random.name?.english}</h3>
      <p>Type:</p>
      <ul>
        {random.type?.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
      <p>Base:</p>
      <ul>
        <li>HP: {random.base?.HP}</li>
        <li>Attack: {random.base?.Attack}</li>
        <li>Defense: {random.base?.Defense}</li>
        <li>Sp. Attack: {random.base?.["Sp. Attack"]}</li>
        <li>Sp. Defense: {random.base?.["Sp. Defense"]}</li>
        <li>Speed: {random.base?.Speed}</li>
      </ul>
    </div>
  );
}
