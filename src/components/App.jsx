import React, { Fragment } from 'react';

import Icon from './common/Icon';
import Flex from './common/glamorous/Flex';

const ColumnBody = ({ title, subtitle, icon, body }) => (
  <Fragment>
    <div>
      <h1 className="title">
        <Icon icon={icon} className="has-text-info"/>&nbsp;{title}
      </h1>
      <h2 className="subtitle">
        <Icon icon="angle-right"/>&nbsp;
        {subtitle}
      </h2>
    </div>
    {body}
  </Fragment>
);

const TodoListBody = ({

}) => {
  return (
    <div className="notification m-top--small">
      <ul>
        <li className="subtitle">
          <Icon icon="circle"/>&nbsp;
          Task 1
        </li>
        <li className="subtitle">
          <Icon icon="circle"/>&nbsp;
          Task 2
        </li>
        <li className="subtitle">
          <Icon icon="circle"/>&nbsp;
          Task 3
        </li>
      </ul>
    </div>
  )
}

const Body = ({

}) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">

            <div className="column">
              <ColumnBody
                icon="list-alt"
                title="Doing List"
                subtitle={(
                  <span>
                      List of todos that hasn't been done
                  </span>
                )}
                body={<TodoListBody/>}
              />
            </div>

            <div className="column">
              <ColumnBody
                icon="check-circle"
                title="Done List"
                subtitle={(
                  <span>
                      List of todos that has been done
                  </span>
                )}
                body={<TodoListBody/>}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

const App = ({ location, history }) => {
  return (
    <Flex column height="100%" width="100%" justifyContent="space-between">
      <Body/>
    </Flex>
  );
};

export default App;
