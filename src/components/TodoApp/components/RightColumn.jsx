import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import { toggleModalThunk } from '../../../redux/actions/todo-modal-thunk'
import { loadTodos } from '../../../redux/actions/todo-thunk'

import Icon from '../../common/Icon';
import TodoList from './TodoList'
import TaskList from './TaskList'

class RightColumn extends Component {
  componentDidMount() {
    this.props.loadTodos()
  }

  render() {
    console.log('todos', this.props.todos)
    return (
      <div className="column">
        <TodoList
          title={(
            <div className="columns">
              <div className="column">
                <Icon icon="list-alt" className="has-text-info"/>&nbsp;
                Done List
              </div>
            </div>
          )}
          subtitle={(
            <span>
                List of todos that has been done
            </span>
          )}
          body={<TaskList todos={this.props.todos} state="done"/>}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.todoModal.isVisible,
    todos: state.entities && state.entities.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(toggleModalThunk()),
    loadTodos: () => dispatch(loadTodos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightColumn)
