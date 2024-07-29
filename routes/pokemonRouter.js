import express from "express";
import {
  getAllPokemons,
  getPokemonById,
  getPokemonInfo,
} from "../controllers/pokemonControllers.js";
import {
  checkPokemon,
  checkPokemonInfo,
} from "../middlewares/pokemonMiddlewares.js";

const pokemonRouter = express.Router();

pokemonRouter.get("/", getAllPokemons);
pokemonRouter.get("/:id", checkPokemon, getPokemonById);
pokemonRouter.get("/:id/:info", checkPokemon, checkPokemonInfo, getPokemonInfo);

export default pokemonRouter;
