import PropTypes from 'prop-types';
import './style.css'

const TodoList = ({ children }) => {
  return (
    <>
      <ul className="TodoList">
        {children}
      </ul>
    </>
  )
}

TodoList.propTypes = {
  children: PropTypes.node,
}

export { TodoList }