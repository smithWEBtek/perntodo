import React, { Fragment } from 'react';
import InputTodo from './components/Todo/InputTodo'
import ListTodos from './components/Todo/ListTodos'
import JsonEditor from './components/JsonEditor/JsonEditor';

function App() {
  return (
    <Fragment>
      <div className="container text-center">
        <JsonEditor />
        <hr />
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
