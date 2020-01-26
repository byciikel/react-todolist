import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import {
  toggleModalThunk
} from '../../../redux/actions/todo-modal-thunk'

import Icon from '../../common/Icon';
import TodoList from './TodoList'
import TaskList from './TaskList'


const LeftColumn = (props) => {
  console.log(props)
  return (
    <div className="column">
      <TodoList
        title={(
          <div className="columns">
            <div className="column is-four-fifths">
              <Icon icon="list-alt" className="has-text-info"/>&nbsp;
              Doing List
            </div>
            <div className="column">
              <button className="button is-primary is-rounded is-small" onClick={props.toggleModal}>
                Add New
              </button>
            </div>
          </div>
        )}
        subtitle={(
          <span>
              List of todos that hasn't been done
          </span>
        )}
        body={<TaskList/>}
      />
    </div>
  )
}

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
)(LeftColumn)
