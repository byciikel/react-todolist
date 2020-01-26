import {
  TODO_MODAL_TOGGLE_VISIBILITY,
  CHANGE_TODO_MODAL_DATA
} from './types'

export const toggleModal = (visible) => {
  return {
    type: TODO_MODAL_TOGGLE_VISIBILITY,
    payload: visible,
  }
}

export const changeDataTodo = (todo) => {
  return {
    type: CHANGE_TODO_MODAL_DATA,
    payload: todo,
  }
}