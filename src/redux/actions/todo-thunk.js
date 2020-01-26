import { loadEntity } from 'redux-entity';
import TodoDomainService from '../../services/domain/todo-domain-service';
import { ENTITY_KEY } from '../../common/app-const'

export function loadTodos() {
  return loadEntity(
    ENTITY_KEY.TODOS,
    TodoDomainService.getTodoList()
  );
}

export function addTodoThunk(form) {
  return loadEntity(
    ENTITY_KEY.TODOS,
    TodoDomainService.setTodoList(form),
    {append: true}
  );
}
