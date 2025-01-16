import PropTypes from "prop-types"
import { PokemonCard } from "../PokemonCard"
import './style.css'

const PokemonList = ({ pokemons }) => {
  console.log(pokemons)
  return(
    <div className="PokemonList">
      {pokemons.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </div>
  )
}

PokemonList.propTypes = {
  pokemons: PropTypes.array
}

export { PokemonList }
