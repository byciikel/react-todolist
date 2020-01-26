import { INITIAL_STATE } from '../../common/app-const';
import {
  ADD_TODO
} from '../actions/types';
import dotProp from 'dot-prop-immutable'

const todo = (state = INITIAL_STATE.entities, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return dotProp.set(state, 'todos.data', action.payload);
    }
    default: {
      return state;
    }
  }
};

export default todo;
