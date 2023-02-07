const data = require("../data.json");

// const getAllPokemons = (req, res) => {
//   res.send(data);
// };
const getAllPokemons = (req, res) => {
  const { page } = req.query;

  const pokemonsPerPage = 20;
  console.log(page);
  const indexOfLastPokemon = page * pokemonsPerPage; //1*20=20

  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; //0

  const currentPokemons = data.slice(indexOfFirstPokemon, indexOfLastPokemon); //(0,20)-20 is not included

  res.send({
    currentPokemons: currentPokemons,
    limit: pokemonsPerPage, //20
    totalPokemons: data.length, //809
  });
};

const getPokemonByName = (req, res) => {
  try {
    const { name } = req.params;
    const pokemon = data.find((value) => value.name.english === name);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const getRandomPokemon = (req, res) => {
  try {
    const id = Math.floor(Math.random() * 809) + 1;
    const pokemon = data.find((value) => value.id === id);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  getAllPokemons,
  getPokemonByName,
  getRandomPokemon,
};
