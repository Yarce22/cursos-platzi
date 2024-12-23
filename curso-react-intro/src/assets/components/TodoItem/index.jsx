import PropTypes from "prop-types"
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './style.css'

const TodoItem = ({text, completed, onComplete, onDelete}) => {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <FaCheck />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        <MdDelete />
      </span>
    </li>
  )
}

TodoItem.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func
}

export { TodoItem }