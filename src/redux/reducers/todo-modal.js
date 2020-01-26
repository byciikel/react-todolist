import { INITIAL_STATE } from '../../common/app-const';
import {
  ADD_MODAL_TOGGLE_VISIBILITY,
  UPDATE_MODAL_TOGGLE_VISIBILITY,
  CHANGE_INDEX_STATUS,
} from '../actions/types';
import dotProp from 'dot-prop-immutable'

const todoModal = (state = INITIAL_STATE.todoModal, action) => {
  switch (action.type) {
    case ADD_MODAL_TOGGLE_VISIBILITY: {
      return dotProp.toggle(state, 'addModalIsVisible');
    }
    case UPDATE_MODAL_TOGGLE_VISIBILITY: {
      return dotProp.toggle(state, 'updateModalIsVisible');
    }
    default: {
      return state;
    }
  }
};

export default todoModal;
