import {
  ADD_MODAL_TOGGLE_VISIBILITY,
  UPDATE_MODAL_TOGGLE_VISIBILITY,
  CHANGE_INDEX_STATUS,
} from './types'

export const toggleAddModal = () => {
  return {
    type: ADD_MODAL_TOGGLE_VISIBILITY
  }
}

export const toggleUpdateModal = () => {
  return {
    type: UPDATE_MODAL_TOGGLE_VISIBILITY
  }
}