import { NavLink } from "react-router-dom";
import Pagination from "../generalComponents/Pagination";
import Card from "react-bootstrap/Card";
export default function AllPokemons({
  pokemons,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  return (
    <>
      <p className="text-center">
        {`Page ${currentPage}`} of{" "}
        {Math.ceil(pokemons.totalPokemons / pokemons.limit)}
      </p>
      <div className="d-flex flex-direction-row flex-wrap justify-content-center gap-3">
        {pokemons.currentPokemons?.map((pokemon) => {
          return (
            <Card key={pokemon.id} style={{ width: "13rem" }}>
              <Card.Body>
                <Card.Title>{pokemon.name.english}</Card.Title>
                <br />
                <Card.Text>
                  {pokemon.type.map((ty) => {
                    //return <span className="poke-type">{ty} </span>;
                    return (
                      <span
                        className={
                          ty === "Grass"
                            ? "poke-type poke-type-grass"
                            : ty === "Normal"
                            ? "poke-type poke-type-normal"
                            : ty === "Flying"
                            ? "poke-type poke-type-flying"
                            : ty === "Fire"
                            ? "poke-type poke-type-fire"
                            : ty === "Water"
                            ? "poke-type poke-type-water"
                            : ty === "Poison"
                            ? "poke-type poke-type-poison"
                            : ty === "Bug"
                            ? "poke-type poke-type-bug"
                            : ty === "Electric"
                            ? "poke-type poke-type-electric"
                            : ty === "Ground"
                            ? "poke-type poke-type-ground"
                            : ty === "Fairy"
                            ? "poke-type poke-type-fairy"
                            : ty === "Fighting"
                            ? "poke-type poke-type-fighting"
                            : ty === "Psychic"
                            ? "poke-type poke-type-psychic"
                            : ty === "Rock"
                            ? "poke-type poke-type-rock"
                            : ty === "Ice"
                            ? "poke-type poke-type-ice"
                            : ty === "Ghost"
                            ? "poke-type poke-type-ghost"
                            : ty === "Dragon"
                            ? "poke-type poke-type-dragon"
                            : ty === "Dark"
                            ? "poke-type poke-type-dark"
                            : ty === "Steel"
                            ? "poke-type poke-type-steel"
                            : null
                        }
                      >
                        {ty}{" "}
                      </span>
                    );
                  })}
                </Card.Text>
                <Card.Link href={`/pokemons/${pokemon.name.english}`}>
                  View Info
                </Card.Link>
              </Card.Body>
            </Card>
          );
        })}
        {/* <ul>
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
        </ul> */}
      </div>
      <Pagination
        pokemonsPerPage={pokemons.limit}
        totalPokemons={pokemons.totalPokemons}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {/* </div> */}
    </>
  );
}
