import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import {
  toggleModalThunk,
} from '../../../redux/actions/todo-modal-thunk'
import {
  updateTodoThunk
} from '../../../redux/actions/todo-thunk'
import TodoModal from './TodoModal'

export class UpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ form: nextProps.filteredTodo })
  }

  getDateNow() {
    var date = new Date();
    var formatedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes();
    return formatedDate;
  }

  titleChange(event) {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.placeholder.toLowerCase()]: event.target.value,
      }
    })
  }

  filteredTodo() {
    return this.props.todos.map(todo => todo.id === this.state.form.id ? this.state.form : todo)
  }

  deletedTodo() {
    let todos = this.props.todos
    let todoIndex = todos.findIndex(todo => todo.id === this.state.form.id)
    return todos.slice(todoIndex+1)
  }

  async markTodo(event) {
    await this.setState({
      form: {
        ...this.state.form,
        status: 1,
      }
    })
    await this.props.updateTodo(this.filteredTodo())
    this.props.toggleModal('NULL')
  }

  async updateTodo(event) {
    await this.props.updateTodo(this.filteredTodo())
    this.props.toggleModal('NULL')
  }

  async deleteTodo(event) {
    await this.props.updateTodo(this.deletedTodo())
    this.props.toggleModal('NULL')
  }
  
  render() {
    console.log(this.state.form)
    return (
      <TodoModal
        actived={this.props.isVisible === 'UPDATE' ? 'is-active' : ''}
        title="Update Todo"
        body={(
          <div>
            <input
              className="input margin-1"
              type="text"
              placeholder="Title"
              value={this.state.form.title || ''}
              onChange={this.titleChange.bind(this)}
            />
            <textarea
              className="textarea margin-1"
              placeholder="Description"
              value={this.state.form.description || ''}
              onChange={this.titleChange.bind(this)}
            />
          </div>
        )}
        button={(
          <div className="button-right">
            <button className="button is-info" onClick={this.markTodo.bind(this)}>Mark Done</button>
            <button className="button is-primary" onClick={this.updateTodo.bind(this)}>Update</button>
            <button className="button is-danger" onClick={this.deleteTodo.bind(this)}>Delete</button>
          </div>
        )}
        close={() => this.props.toggleModal('NULL')}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.todoModal.currentVisible,
    filteredTodo: state.todoModal.dataTodo,
    todos: state.entities.todos && state.entities.todos.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (visible) => dispatch(toggleModalThunk(visible)),
    updateTodo: (form) => dispatch(updateTodoThunk(form))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateModal)