const express = require("express");

const {
    createFight,
    getFights,
    // getFightsByName
} = require("../controllers/pokemonFightsControllers");

const pokemonFightsRouter = express.Router();

pokemonFightsRouter.get('/showfights', getFights);
pokemonFightsRouter.post('/savefight',createFight);
// pokemonFightsRouter.get('/:name',getFightsByName);

module.exports = {
    pokemonFightsRouter,
  };