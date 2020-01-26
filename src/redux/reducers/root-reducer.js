import { combineReducers } from 'redux';
import { entities } from 'redux-entity';
import counter from './counter';
import todoModal from './todo-modal'

export default combineReducers({
  entities,
  counter,
  todoModal,
});
