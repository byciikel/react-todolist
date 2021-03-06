import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import dateFormat from 'dateformat'
import {
  toggleModalThunk
} from '../../../redux/actions/todo-modal-thunk'
import {
  addTodoThunk
} from '../../../redux/actions/todo-thunk'
import TodoModal from './TodoModal'

const initialState = {
  form: {
    title: '',
    description: ''
  }
}

export class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }
  
  titleChange(event) {
    this.setState({
      form: {
        ...this.state.form,
        id: this.props.todos.length + 1,
        [event.target.placeholder.toLowerCase()]: event.target.value,
        status: 0,
        createdAt: dateFormat(new Date(), "yyyy-mm-dd hh:MM")
      }
    })
  }

  async saveTodo(event) {
    await this.props.toggleModal('NULL')
    await this.props.addTodo(this.state.form)
    this.setState(initialState)
  }
  
  render() {
    return (
      <TodoModal
        actived={this.props.isVisible === 'ADD' ? 'is-active' : ''}
        title="Add Todo"
        body={(
          <div>
            <input
              className="input margin-1"
              type="text"
              placeholder="Title"
              value={this.state.form.title}
              onChange={this.titleChange.bind(this)}
            />
            <textarea
              className="textarea margin-1"
              placeholder="Description"
              value={this.state.form.description}
              onChange={this.titleChange.bind(this)}
            />
          </div>
        )}
        button={(
          <button className="button is-primary button-right" onClick={this.saveTodo.bind(this)}>Save</button>
        )}
        close={() => this.props.toggleModal('NULL')}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.todoModal.currentVisible,
    todos: state.entities.todos && state.entities.todos.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (visible) => dispatch(toggleModalThunk(visible)),
    addTodo: (form) => dispatch(addTodoThunk(form))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddModal)