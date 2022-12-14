import React, { Fragment, useState } from 'react'

const InputTodo = () => {
  const [description, setDescription] = useState('')

  const onChangeDescription = (e) => {
    e.preventDefault()
    setDescription(e.target.value)
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    try {
      const body = { description }
      await fetch("http://localhost:5000/todos", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })

      window.location = "/" // refreshes to show changes
    } catch (error) {
      console.error('error: ', error.message)
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">pern TODO List</h1>
      <hr />
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={onChangeDescription}></input>
        <button
          type="submit"
          className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}

export default InputTodo
