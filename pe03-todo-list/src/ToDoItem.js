import React from 'react';

// Component to render an individual todo item
export default function TodoItem({ todo, onDeleteTask }) {
  return (
    <li className="todo-item">
      {todo.text} {/* Display the todo text */}
      {/* Button to delete this todo item */}
      <button onClick={() => onDeleteTask(todo.id)}>Delete</button>
    </li>
  );
}