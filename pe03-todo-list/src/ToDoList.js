import React from 'react';
import TodoItem from './ToDoItem'; // Import the TodoItem component

// Component to render the list of tasks
export default function ToDoList({ todos, onDeleteTask }) {
  return (
    <ul className="todo-list">
      {/* Map over each todo and render a TodoItem component */}
      {todos.map(todo => (
        <TodoItem
          key={todo.id} // Use the unique id as the key
          todo={todo} // Pass the todo data to the TodoItem
          onDeleteTask={onDeleteTask} // Pass the delete function to the TodoItem
        />
      ))}
    </ul>
  );
}