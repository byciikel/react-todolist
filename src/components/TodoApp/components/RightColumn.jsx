import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import {
  toggleModalThunk,
  changeDataTodoThunk
} from '../../../redux/actions/todo-modal-thunk'
import { loadTodos } from '../../../redux/actions/todo-thunk'

import Icon from '../../common/Icon';
import TodoList from './TodoList'
import TaskList from './TaskList'

class RightColumn extends Component {
  componentDidMount() {
    this.props.loadTodos()
  }

  render() {
    return (
      <div className="column">
        <TodoList
          title={(
            <div>
              <Icon icon="list-alt" className="has-text-info"/>&nbsp;
              Done List
            </div>
          )}
          body={
            <TaskList
              todos={this.props.todos}
              state="done"
              clicked={() => this.props.toggleModal('UPDATE_WITHOUT_DELETE')}
              filteredTodo={(todo) => this.props.changeDataTodo(todo)}
            />
          }
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
    toggleModal: (visible) => dispatch(toggleModalThunk(visible)),
    changeDataTodo: (todo) => dispatch(changeDataTodoThunk(todo)),
    loadTodos: () => dispatch(loadTodos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightColumn)
