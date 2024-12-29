import PropTypes from "prop-types"
import { TodoContext } from "../../TodoContext"
import './style.css'
import { useContext } from "react"

const TodoCounter = () => {
  const { total, completed } = useContext(TodoContext)

  return (
    <div className="TodoCounter">
      {(total != 0) &&
        <h1>
          Has completado <span>{completed}</span> de <span>{total}</span> {total >= 1 ? "TODO" : "TODOs"}
        </h1>
      }
    </div>
  )
}

TodoCounter.propTypes = {
  total: PropTypes.number,
  completed: PropTypes.number
}

export { TodoCounter }