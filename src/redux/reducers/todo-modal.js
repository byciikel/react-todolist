import { INITIAL_STATE } from '../../common/app-const';
import {
  TODO_MODAL_TOGGLE_VISIBILITY
} from '../actions/types';
import dotProp from 'dot-prop-immutable'

const todoModal = (state = INITIAL_STATE.todoModal, action) => {
  switch (action.type) {
    case TODO_MODAL_TOGGLE_VISIBILITY: {
      return dotProp.toggle(state, 'todoModal.isVisible');
    }
    default: {
      return state;
    }
  }
};

export default todoModal;
