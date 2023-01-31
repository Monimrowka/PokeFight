import { NavLink } from "react-router-dom";

export default function AllPokemons({ pokemons }) {
  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <NavLink to={`/pokemons/${pokemon.id}`}>
                {pokemon.name.english}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
