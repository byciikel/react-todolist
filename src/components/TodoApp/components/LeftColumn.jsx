import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import { toggleAddModalThunk } from '../../../redux/actions/todo-modal-thunk'
import { loadTodos } from '../../../redux/actions/todo-thunk'

import Icon from '../../common/Icon';
import TodoList from './TodoList'
import TaskList from './TaskList'

class LeftColumn extends Component {
  componentDidMount() {
    this.props.loadTodos()
  }

  render() {
    console.log(this.props)
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
            <a className="card-header-icon" aria-label="more options" onClick={this.props.toggleAddModal}>
              <Icon icon="plus-circle" className="has-text-primary"/>
            </a>
          )}
          body={<TaskList todos={this.props.todos} state="doing"/>}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.todoModal.addModalIsVisible,
    todos: state.entities && state.entities.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAddModal: () => dispatch(toggleAddModalThunk()),
    loadTodos: () => dispatch(loadTodos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftColumn)
