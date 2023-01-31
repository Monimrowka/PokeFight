const express = require("express");
const app = express.Router();

const {
    getAllPokemons,
    getPokemonById,
  } = require("../controllers/pokemonControllers");

app.route("/").get(getAllPokemons);

app.route("/:id").get(getPokemonById);

  module.exports = app;