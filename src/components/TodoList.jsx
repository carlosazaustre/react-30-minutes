import React from "react";

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>Tarea</li>
      ))}
    </ul>
  );
}
