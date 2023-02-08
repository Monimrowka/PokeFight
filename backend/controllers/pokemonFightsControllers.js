const pokemonFights = require("../models/pokemonFights");

const createFight = async (req, res) => {
  const { game_id, chosen_pokemon, random_pokemon, winner } = req.body;

  try {
    const fight = await pokemonFights.create({
      game_id,
      chosen_pokemon,
      random_pokemon,
      winner,
    });
    res.status(201).json(fight);
  } catch (error) {
    res.status(500).send(error.messages);
  }
};

const getFights = async (req, res) => {
  try {
    const fights = await pokemonFights.find({});
    res.json(fights);
  } catch (error) {
    res.status(500).send(error.messages);
  }
};

const getFightsByName = async (req, res) => {
  const { name } = req.params;
  try {
    const fight = await pokemonFights.find({
      $or: [
        { chosen_pokemon: name },
        { winner: name },
        { random_pokemon: name },
      ],
    });
    console.log(fight);
    res.status(200).json(fight);
  } catch (error) {
    res.status(500).send(error.messages);
  }
};

module.exports = {
  createFight,
  getFights,
  getFightsByName,
};
