import pokemonData from "../pokemonData.json" assert { type: "json" };

export const getAllPokemons = (req, res) => {
  res.json(pokemonData);
};

export const getPokemonById = (req, res) => {
  const { pokemon } = req;
  return res.json(pokemon);
};

export const getPokemonInfo = (req, res) => {
  const { pokemonInfo } = req;

  return res.json(pokemonInfo);
};
