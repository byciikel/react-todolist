import React, { Fragment } from '../../../node_modules/react';
import Icon from '../common/Icon';
import TodoList from './components/TodoList'
import TaskList from './components/TaskList'

const RightColumn = ({

}) => {
  return (
    <div className="column">
      <TodoList
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
        body={<TaskList/>}
      />
    </div>
  )
}

export default RightColumn;
