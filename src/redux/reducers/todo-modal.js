import { INITIAL_STATE } from '../../common/app-const';
import {
  TODO_MODAL_TOGGLE_VISIBILITY,
  CHANGE_TODO_MODAL_DATA
} from '../actions/types';
import dotProp from 'dot-prop-immutable'

const todoModal = (state = INITIAL_STATE.todoModal, action) => {
  switch (action.type) {
    case TODO_MODAL_TOGGLE_VISIBILITY: {
      return dotProp.set(state, 'currentVisible', action.payload);
    }
    case CHANGE_TODO_MODAL_DATA: {
      return dotProp.set(state, 'dataTodo', action.payload);
    }
    default: {
      return state;
    }
  }
};

export default todoModal;
