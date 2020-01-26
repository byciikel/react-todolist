import React, { Fragment } from 'react';

import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'
import AddModal from './components/AddModal'
import UpdateModal from './components/UpdateModal'

const TodoApp = ({

}) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <AddModal/>
          <UpdateModal/>
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
