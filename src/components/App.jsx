import React, { Fragment } from 'react';

import Footer from './Footer';
import Flex from './common/glamorous/Flex';

const App = ({ location, history }) => {
  return (
    <Flex column height="100%" width="100%" justifyContent="space-between">
      <Footer/>
    </Flex>
  );
};

export default App;
