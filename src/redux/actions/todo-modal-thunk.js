import { toggleModal } from './todo-modal-action-creators'

const toggleModalThunk = () => {
  return (dispatch) => {
    dispatch(toggleModal())
  }
}