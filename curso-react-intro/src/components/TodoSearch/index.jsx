import PropTypes from 'prop-types'
import './style.css'
import { TodoContext } from '../../TodoContext'
import { useContext } from 'react'

const TodoSearch = () => {
  const { searchValue, inputText} = useContext(TodoContext)
  return (
    <input
      placeholder="Buscar ToDo"
      className="TodoSearch"
      value={searchValue}
      onChange={inputText}
    />
  )
}

TodoSearch.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func
}

export { TodoSearch }