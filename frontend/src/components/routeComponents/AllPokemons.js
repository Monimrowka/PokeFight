import { NavLink } from "react-router-dom";

export default function AllPokemons({ pokemons }) {
  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <NavLink style={{textDecoration: "none", color: "inherit"}} to={`/pokemons/${pokemon.name.english}`}>
                {pokemon.name.english}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
