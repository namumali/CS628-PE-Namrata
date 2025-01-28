import React, { useState } from 'react';
import TodoList from './ToDoList'; // Import the TodoList component
import './App.css'; // Import the CSS for styling

// Main App component
export default function App() {
  // State to hold the current input value
  const [todo, setTodo] = useState('');
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);

  // Function to handle the addition of a new task
  const handleAddTask = () => {
    // Check if the input is not empty
    if (todo) {
      // Add the new task to the todos array with a unique id
      setTodos([...todos, { id: Date.now(), text: todo }]);
      // Clear the input field
      setTodo('');
    }
  };

  // Function to handle the deletion of a task
  const handleDeleteTask = (id) => {
    // Filter out the task with the specified id from the todos array
    setTodos(todos.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1>ToDo List</h1>
      {/* Input field for adding new tasks */}
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)} // Update the todo state on input change
        placeholder="Enter a task"
      />
      {/* Button to add the task */}
      <button onClick={handleAddTask}>Add Task</button>
      {/* Render the TodoList with the current todos and delete functionality */}
      <TodoList todos={todos} onDeleteTask={handleDeleteTask} />
    </div>
  );
}