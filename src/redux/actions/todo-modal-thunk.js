import { toggleModal } from './todo-modal-action-creators'

export const toggleModalThunk = () => {
  return (dispatch) => {
    dispatch(toggleModal())
  }
}
