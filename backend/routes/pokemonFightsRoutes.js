const express = require("express");

const {
  createFight,
  getFights,
  getFightsByName,
} = require("../controllers/pokemonFightsControllers");

const pokemonFightsRouter = express.Router();

pokemonFightsRouter.get("/showfights", getFights);
// pokemonFightsRouter.get("/showfights/:page", getFights);

pokemonFightsRouter.post("/savefight", createFight);
pokemonFightsRouter.get("/showfights/:name", getFightsByName);

module.exports = {
  pokemonFightsRouter,
};
