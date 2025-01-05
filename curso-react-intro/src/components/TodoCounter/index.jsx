import PropTypes from "prop-types"
import { TodoContext } from "../../TodoContext"
import './style.css'
import { useContext } from "react"

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext)

  console.log(totalTodos)

  return (
    <div className="TodoCounter">
      {(totalTodos != 0) &&
        <h1>
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> {totalTodos >= 1 ? "TODO" : "TODOs"}
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