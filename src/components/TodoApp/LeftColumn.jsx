import React, { Fragment } from '../../../node_modules/react';
import Icon from '../common/Icon';
import TodoList from './components/TodoList'
import TaskList from './components/TaskList'

const LeftColumn = ({

}) => {
  return (
    <div className="column">
      <TodoList
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
        body={<TaskList/>}
      />
    </div>
  )
}

export default LeftColumn;
