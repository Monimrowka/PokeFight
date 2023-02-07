import axios from "axios";
import { useState } from "react";

export default function Pokemon({ version }) {
  const [pokePic, setPokePic] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const apiPicture = () => {
    let pokeName = version.name?.english.toLowerCase();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
      .then((response) => {
        setPokePic(response.data.sprites.front_default);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  apiPicture();

  return (
    <div>
      {isLoading ? (
        <p>Loading random Pokemon</p>
      ) : (
        <img src={pokePic} alt={version.name?.english} style={{ width: 150 }} />
      )}
      <h3>{version.name?.english}</h3>
      {/* <p>Type:</p>
      <ul>
        {version.type?.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul> */}
      <p>Base:</p>
      <ul>
        <li>Speed: {version.base?.Speed}</li>
        <li>HP: {version.base?.HP}</li>
        <li>Attack: {version.base?.Attack}</li>
        <li>Defense: {version.base?.Defense}</li>
        {/* <li>Sp. Attack: {version.base?.["Sp. Attack"]}</li>
        <li>Sp. Defense: {version.base?.["Sp. Defense"]}</li> */}
      </ul>
    </div>
  );
}
