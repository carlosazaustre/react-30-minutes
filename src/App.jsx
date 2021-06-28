import React, { Fragment, useState } from "react";
import { TodoList } from "./components/TodoList";

export function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea ", completed: false },
  ]);

  return (
    <Fragment>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Añadir</button>
      <button>Eliminar</button>
    </Fragment>
  );
}
