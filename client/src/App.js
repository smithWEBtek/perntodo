import React, { Fragment } from "react";
import InputTodo from "./components/Todo/InputTodo";
import ListTodos from "./components/Todo/ListTodos";
import JsonEditor from "./components/JsonEditor/JsonEditor";
import ListProblems from "./components/Problems/ListProblems";

function App() {
  return (
    <Fragment>
      <div className="container text-center">
          <JsonEditor />
          <ListProblems />
        <hr />
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
