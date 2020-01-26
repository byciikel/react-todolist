import React, { Fragment } from 'react';

import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'

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
