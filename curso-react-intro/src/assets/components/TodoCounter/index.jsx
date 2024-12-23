import PropTypes from "prop-types"
import './style.css'

const TodoCounter = ({ total, completed }) => {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  )
}

TodoCounter.propTypes = {
  total: PropTypes.number,
  completed: PropTypes.number
}

export { TodoCounter }