import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
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

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {method: "DELETE"})
      console.log('deleteTodo: ', deleteTodo);
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (error) {
      console.error('error: ', error.message)
    }
  }

  const renderedTodos = todos.map(todo => {
    return (<tr key={todo.todo_id}>
      <td>{todo.todo_id}</td>
      <td>{todo.description}</td>
      <td>{<EditTodo todo={todo}/>}</td>
      <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>X</button></td>
    </tr>
    )
  });

  return (
    <Fragment>
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
