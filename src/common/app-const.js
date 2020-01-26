export const ENTITY_KEY = {
  FOO: 'foo',
  BAR: 'bar',
  BAZ: 'baz',
  TODOS: 'todos',
};

export const INITIAL_STATE = {
  entities: {
    [ENTITY_KEY.FOO]: {},
    [ENTITY_KEY.BAR]: {},
    [ENTITY_KEY.BAZ]: {},
    [ENTITY_KEY.TODO]: {}

  },
  counter: 0,
  todoModal: {
    addModalIsVisible: false,
    updateModalIsVisible: false,
    statusIndex: 0
  },
};
