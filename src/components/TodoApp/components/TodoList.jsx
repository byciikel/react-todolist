import React, { Fragment } from 'react';

const TodoList = ({ title, button, body }) => (
  <div className="card">
    <header className="card-header">
      <div className="card-header-title">
        <h1 className="title">
          {title}
        </h1>
      </div>
      {button}
    </header>
    <div className="card-content">
      <div className="content">
        {body}
      </div>
    </div>
  </div>
);

export default TodoList