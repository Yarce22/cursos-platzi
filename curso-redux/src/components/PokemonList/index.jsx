import PropTypes from "prop-types"
import { PokemonCard } from "../PokemonCard"
import './style.css'

const PokemonList = ({ pokemons }) => {

  return(
    <div className="PokemonList">
      {pokemons.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          img={pokemon.sprites.front_default}
          abilities={pokemon.abilities.map(ability => ability.ability.name).join(', ')}
          types={pokemon.types.map(type => type.type.name).join(', ')}
          id={pokemon.id}
          favorite={pokemon.favorite}
        />
      ))}
    </div>
  )
}

PokemonList.propTypes = {
  pokemons: PropTypes.array
}

export { PokemonList }
