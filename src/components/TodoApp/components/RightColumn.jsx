import React, { Fragment } from 'react';
import Icon from '../../common/Icon';
import TodoList from './TodoList'
import TaskList from './TaskList'

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
