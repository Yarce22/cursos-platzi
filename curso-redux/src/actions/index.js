import { getPokemonDetails } from "../API";
import { SET_FAVORITE, SET_POKEMONS, SET_SEARCH } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
})

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
})

export const searchValue = (payload) => ({
  type: SET_SEARCH,
  payload,
})

export const getPokemonWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonsDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)))

  dispatch(setPokemons(pokemonsDetailed))
}