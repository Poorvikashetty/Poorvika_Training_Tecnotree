import React, { useState, useEffect } from 'react';
import Task from './component/Task';
import TaskForm from './component/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      title: title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  }

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="app">
      <h1>MY TO DO LIST</h1>
      <TaskForm addTask={addTask} />
      {tasks.map((task, index) => (
        <Task key={index} index={index} task={task} completeTask={completeTask} removeTask={removeTask} />
        ))}
        </div>
        );
        }
        
        export default App;
