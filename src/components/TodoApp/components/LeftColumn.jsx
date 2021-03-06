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

class LeftColumn extends Component {
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
              Doing List
            </div>
          )}
          button={(
            <a
              className="card-header-icon"
              aria-label="more options"
              onClick={() => this.props.toggleModal('ADD')}
            >
              <Icon icon="plus-circle" className="has-text-info"/>
            </a>
          )}
          body={
            <TaskList
              todos={this.props.todos}
              state="doing"
              clicked={() => this.props.toggleModal('UPDATE')}
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
)(LeftColumn)
