import PropTypes from 'prop-types'
import './style.css'

const TodoSearch = ({ searchValue, setSearchValue }) => {

  const inputText = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <input
      placeholder="Cortar cebolla"
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