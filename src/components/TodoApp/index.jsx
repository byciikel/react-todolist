import React, { Fragment } from '../../../node_modules/react';

import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const TodoApp = ({

}) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <LeftColumn/>
            <RightColumn/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TodoApp;
