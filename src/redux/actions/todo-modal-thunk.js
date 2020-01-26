import {
  toggleAddModal,
  toggleUpdateModal
} from './todo-modal-action-creators'

export const toggleAddModalThunk = () => {
  return (dispatch) => {
    dispatch(toggleAddModal())
  }
}

export const toggleUpdateModalThunk = () => {
  return (dispatch) => {
    dispatch(toggleUpdateModal())
  }
}

export const closeModalThunk = () => {
  return (dispatch) => {
    dispatch(toggleAddModal())
    dispatch(toggleUpdateModal())
  }
}
