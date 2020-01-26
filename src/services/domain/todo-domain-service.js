import DataAccessService from '../data/data-access-service';

const TodoDomainService = {
  getTodoList() {
    return DataAccessService.get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list');
  }
}

export default TodoDomainService