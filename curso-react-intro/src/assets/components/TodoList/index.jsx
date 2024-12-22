import PropTypes from 'prop-types';

const TodoList = ({ children }) => {
  return (
    <ul>
      {children}
    </ul>
  )
}

TodoList.propTypes = {
  children: PropTypes.node
}

export { TodoList }