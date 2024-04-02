
// App.js
import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/TodoApp.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks && Array.isArray(storedTasks)) {
      setTasks(storedTasks);
    }
  }, []);

  // Update local storage whenever tasks change
  const updateLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;

