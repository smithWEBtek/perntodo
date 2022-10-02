import React, { Fragment } from 'react'

const EditTodoButton = ({onClick}) => {
  return (
    <Fragment>
      <button className="btn btn-warning" onClick={onClick} data-toggle="modal">edit</button>
    </Fragment>
  )
}

export default EditTodoButton;
