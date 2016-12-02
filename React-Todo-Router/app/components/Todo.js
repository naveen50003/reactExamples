import React, { PropTypes } from 'react'

const Todo = ({ onClick, value}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: value.completed ? 'line-through' : 'none'
    }}
  >
    {value.text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  value : PropTypes.object.isRequired
}

export default Todo
