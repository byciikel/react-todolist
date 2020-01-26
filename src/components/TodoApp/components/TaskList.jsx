import React, { Component } from 'react';
import Icon from '../../common/Icon';

export class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }

  isActive(id) {
    if (this.state.id === id) {
      this.setState({ id: '' })
    } else {
      this.setState({ id: id })
    }
  }

  render() {
    let { todos, state } = this.props

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
            <a className={this.state.id === todo.id ? 'is-active' : ''} onClick={() => this.isActive(todo.id)}>
              {todo.title}
            </a>
          </li>
        ))}
      </ul>
    )
  }
}

export default TaskList