import React, { Fragment } from 'react';
import Icon from '../../common/Icon';

const TaskList = ({

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

export default TaskList