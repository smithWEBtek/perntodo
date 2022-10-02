import React, { Fragment, useEffect, useState } from 'react';

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

  // separate function for getting todos, using async/await ^^
  useEffect(() => {
    getTodos();
  }, [])

  //  doing it all in useEffect without async/await
  // useEffect(() => {
  //   fetch('http://localhost:5000/todos', {
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('data: ', data);
  //       setTodos(data);
  //     })
  // }, []);

  console.log(todos);

  const renderedTodos = todos.map(todo => {
    return (<tr key={todo.todo_id}>
      <td>{todo.todo_id}</td>
      <td>{todo.description}</td>
      <td>Edit</td>
      <td>X</td>
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
