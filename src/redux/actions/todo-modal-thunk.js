import {
  toggleModal,
  changeDataTodo
} from './todo-modal-action-creators'

export const toggleModalThunk = (visible) => {
  return (dispatch) => {
    dispatch(toggleModal(visible))
  }
}

export const changeDataTodoThunk = (todo) => {
  return (dispatch) => {
    dispatch(changeDataTodo(todo))
  }
}
