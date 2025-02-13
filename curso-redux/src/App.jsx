import PropTypes from 'prop-types'
import { Col, Spin } from 'antd'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual} from 'react-redux'
import { fetchPokemonsWithDetails } from './slices/dataSlice'
import logo from './assets/logo.svg'
import './App.css'

const App = () => {
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [dispatch])

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt="logo-pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher
          pokemons={pokemons}
        />
      </Col>
      <Col offset={12} className='loading'>
        <Spin spinning={!pokemons.length} size='large'  />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

App.propTypes = {
  pokemons: PropTypes.array,
  setPokemons: PropTypes.func
}

export default App
