const express = require("express");
const app = express.Router();

const {
    getAllPokemons,
    // getPokemonById,
    getPokemonByName,
  } = require("../controllers/pokemonControllers");

app.route("/").get(getAllPokemons);

// app.route("/:id").get(getPokemonById);
app.route("/:name").get(getPokemonByName);

  module.exports = app;