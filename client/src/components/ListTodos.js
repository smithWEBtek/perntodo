import React, { Fragment, useEffect, useState } from 'react';
import EditTodoButton from './EditTodoButton';
import EditTodoModalForm from './EditTodoModalForm';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const [showEditTodoModalForm, setShowEditTodoModalForm] = useState(false)
  const [editTodo, setEditTodo] = useState({})
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsonData = await response.json();
      setTodos(jsonData)
    } catch (error) {
      console.error('error: ', error.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, [])

  const handleShowEditTodoModalForm = (todo) => {
    setEditTodo(todo)
    setShowEditTodoModalForm(true);
  }

  const saveEditedTodo = () => {

  };

  const deleteTodo = async (id) => {
    try {
      // await fetch(`http://localhost:5000/todos/${id}`, {method: "DELETE"})
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" })
      console.log('deleteTodo: ', deleteTodo);
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (error) {
      console.error('error: ', error.message)
    }
  }

  const renderedTodos = todos.map(todo => {
    return (
      <tr key={todo.todo_id}>
        <td>{todo.todo_id}</td>
        <td>{todo.description}</td>
        <td><EditTodoButton onClick={() => handleShowEditTodoModalForm(todo)}>Edit</EditTodoButton></td>
        <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>X</button></td>
      </tr >
    )
  });

  return (
    <Fragment>
      {showEditTodoModalForm && <EditTodoModalForm todo={editTodo} />}

      <table className="table mt-5 text-left" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {renderedTodos}
        </tbody>
      </table>
    </Fragment>
  )
};

export default ListTodos;
