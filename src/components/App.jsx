import React, { Fragment } from 'react';

import Flex from './common/glamorous/Flex';
import TodoApp from './TodoApp/index'

const App = ({ location, history }) => {
  return (
    <Flex column height="100%" width="100%" justifyContent="space-between">
      <TodoApp/>
    </Flex>
  );
};

export default App;
