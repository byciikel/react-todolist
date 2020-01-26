import React, { Fragment } from 'react';
import Icon from '../../common/Icon';

const TaskList = ({ todos, state }) => {
  if (!todos) {
    return null;
  }

  const { error, isFetching, data } = todos

  if (isFetching) {
    return <progress className="progress is-small is-primary" max="100">10%</progress>
  } else if (error) {
    return <span>{ error.message }</span>
  }

  const filterTodos = () => {
    let stateNumber = state === "doing" ? 0 : 1
    return data.filter(todo => todo.status === stateNumber)
  }

  return (
    <ul className="menu-list">
      {filterTodos().map((todo, index) => (
        <li key={index} className="subtitle">
          <a>
            {todo.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default TaskList