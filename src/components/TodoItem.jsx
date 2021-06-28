import React from "react";

export function TodoItem({ todo }) {
  const { id, task, completed } = todo;

  return <li>{task}</li>;
}
