import { toggleModal } from './todo-modal-action-creators'

export const toggleModalThunk = (visible) => {
  return (dispatch) => {
    dispatch(toggleModal(visible))
  }
}
