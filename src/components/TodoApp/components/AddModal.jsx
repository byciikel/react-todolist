import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import {
  closeModalThunk
} from '../../../redux/actions/todo-modal-thunk'
import TodoModal from './TodoModal'

export class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    }
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
        id: this.props.todos.length + 1,
        [event.target.placeholder.toLowerCase()]: event.target.value,
        status: 0,
        createdAt: this.getDateNow()
      }
    })
  }
  
  render() {
    return (
      <TodoModal
        actived={this.props.isVisible}
        title="Add Todos"
        body={(
          <div>
            <input className="input margin-1" type="text" placeholder="Title" onChange={this.titleChange.bind(this)}/>
            <textarea className="textarea margin-1" placeholder="Description" onChange={this.titleChange.bind(this)}></textarea>
          </div>
        )}
        button={(
          <button className="button is-primary button-right">Save</button>
        )}
        close={this.props.toggleModal}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.todoModal.addModalIsVisible,
    todos: state.entities && state.entities.todos.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(closeModalThunk())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddModal)