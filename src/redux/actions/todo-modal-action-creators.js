import {
  TODO_MODAL_TOGGLE_VISIBILITY
} from './types'

export const toggleModal = (visible) => {
  return {
    type: TODO_MODAL_TOGGLE_VISIBILITY,
    payload: visible,
  }
}