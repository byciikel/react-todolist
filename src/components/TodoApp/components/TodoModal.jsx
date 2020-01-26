import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import {
  toggleModalThunk
} from '../../../redux/actions/todo-modal-thunk'

const TodoModal = (props) => (
  <div className={`modal ${props.isVisible ? 'is-active' : ''}`}>
    <div className="modal-background" onClick={props.toggleModal}></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Modal title</p>
        <button className="delete" aria-label="close" onClick={props.toggleModal}></button>
      </header>
      <section className="modal-card-body">
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Save changes</button>
        <button className="button">Cancel</button>
      </footer>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    isVisible: state.todoModal.isVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(toggleModalThunk())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoModal)