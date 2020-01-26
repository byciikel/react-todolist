import React, { Fragment } from 'react';

const TodoModal = ({ actived, title, body, button, close }) => (
  <div className={`modal ${actived}`}>
    <div className="modal-background" onClick={close}></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button className="delete" aria-label="close" onClick={close}></button>
      </header>
      <section className="modal-card-body">
        {body}
      </section>
      <footer className="modal-card-foot">
        {button}
      </footer>
    </div>
  </div>
)

export default TodoModal