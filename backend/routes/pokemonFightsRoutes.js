const express = require("express");

const {
    createFight,
    getFights
} = require("../controllers/pokemonFightsControllers");

const pokemonFightsRouter = express.Router();

pokemonFightsRouter.get('/showfights', getFights);
pokemonFightsRouter.post('/savefight',createFight);

module.exports = {
    pokemonFightsRouter,
  };