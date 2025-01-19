import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemon, getPokemonDetails } from '../API'

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    try {
      const pokemonsRes = await getPokemon()
      const pokemonDetailed = await Promise.all(
        pokemonsRes.map(pokemon => getPokemonDetails(pokemon))
      )
      dispatch(setPokemons(pokemonDetailed))
    } catch (error) {
      console.error(error)
    }
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    pokemons: [],
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      )

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite
        state.pokemons[currentPokemonIndex].favorite = !isFavorite
      }
    },
  },
})

export const { setPokemons, setFavorite } = dataSlice.actions

export const dataReducer = dataSlice.reducer

export default dataReducer