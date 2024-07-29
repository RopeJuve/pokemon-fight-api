import pokemonData from "../pokemonData.json" assert { type: "json" };

export const checkPokemon = (req, res, next) => {
  const { id } = req.params;
  if (!Number.isInteger(parseInt(id, 10))) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  const pokemon = pokemonData.find((pokemon) => pokemon.id === parseInt(id));
  if (!pokemon) {
    return res.status(404).json({ message: `Pokemon with id ${id} not found` });
  }

  req.pokemon = pokemon;
  next();
};

export const checkPokemonInfo = (req, res, next) => {
  const { pokemon } = req;
  const { info } = req.params;

  if (!pokemon[info]) {
    return res
      .status(404)
      .json({ message: `The Pokémon does not have the property ${info}` });
  }

  req.pokemonInfo = pokemon[info];
  next();
};
