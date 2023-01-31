const data = require('../data.json')

const getAllPokemons = (req, res) => {
    res.send(data)
  };

const getPokemonById = (req, res) => {
    try {
      const { id } = req.params;
      const pokemon = data.find((value) => {
        return value.id == id
      })
      res.status(200).json(
        pokemon
      );
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }

  module.exports = {
    getAllPokemons,
    getPokemonById,
  };
  