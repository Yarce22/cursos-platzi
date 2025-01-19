import { getPokemonDetails } from "../API";
import { SET_FAVORITE, SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
})

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
})

export const getPokemonWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonsDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)))

  dispatch(setPokemons(pokemonsDetailed))
}