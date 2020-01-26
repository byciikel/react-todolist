import React, { Fragment } from 'react';

import Icon from './common/Icon';
import Flex from './common/glamorous/Flex';

const ColumnBody = ({ title, subtitle, icon, body }) => (
  <Fragment>
    <div>
      <h1 className="title">
        {title}
      </h1>
      <h2 className="subtitle">
        {subtitle}
      </h2>
    </div>
    {body}
  </Fragment>
);

const TodoListBody = ({

}) => {
  return (
      <ul className="menu-list">
        <li className="subtitle">
          <a>
            <Icon icon="circle"/>&nbsp;
            Task 1
          </a>
        </li>
        <li className="subtitle">
          <a>
            <Icon icon="circle"/>&nbsp;
            Task 2
          </a>
        </li>
        <li className="subtitle">
          <a>
            <Icon icon="circle"/>&nbsp;
            Task 3
          </a>
        </li>
      </ul>
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
                title={(
                  <div className="columns">
                    <div className="column is-four-fifths">
                      <Icon icon="list-alt" className="has-text-info"/>&nbsp;
                      Doing List
                    </div>
                    <div className="column">
                      <button className="button is-primary is-rounded is-small">
                        Add New
                      </button>
                    </div>
                  </div>
                )}
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
                title={(
                  <div>
                    <Icon icon="check-circle" className="has-text-info"/>&nbsp;
                    Done List
                  </div>
                )}
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
