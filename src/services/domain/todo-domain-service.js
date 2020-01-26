import DataAccessService from '../data/data-access-service';

const TodoDomainService = {
  getTodoList() {
    return DataAccessService.get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list');
  },
  setTodoList(form) {
    return new Promise(
      function(resolve) {
        resolve(form)
      }
    )
  }
}

export default TodoDomainService