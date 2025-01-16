import PropTypes from 'prop-types'
import { Col } from 'antd'
import { connect } from 'react-redux'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import { useEffect } from 'react'
import { getPokemon } from './API'
import { setPokemons as setPokemonsActions } from './actions'
import logo from './assets/logo.svg'
import './App.css'

const App = ({pokemons, setPokemons}) => {
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonsRes = await getPokemon()
        setPokemons(pokemonsRes)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPokemons()
  }, [setPokemons])

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt="logo-pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
})

const mapDispatchToProps  = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
})

App.propTypes = {
  pokemons: PropTypes.array,
  setPokemons: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
