import React, { Fragment } from 'react';

const TodoList = ({ title, subtitle, icon, body }) => (
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

export default TodoList