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
  },
  counter: 0,
  todoModal: {
    currentVisible: 'NULL',
  }
};
