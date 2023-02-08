import { NavLink } from "react-router-dom";
import Pagination from "../generalComponents/Pagination";
export default function AllPokemons({
  pokemons,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  return (
    <div>
      <ul>
        {pokemons.currentPokemons?.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <NavLink
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/pokemons/${pokemon.name.english}`}
              >
                {pokemon.name.english}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Pagination
        pokemonsPerPage={pokemons.limit}
        totalPokemons={pokemons.totalPokemons}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
