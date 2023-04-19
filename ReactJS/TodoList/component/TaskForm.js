import React, { useState } from 'react';
import Image from '../todo.gif';
const TaskForm = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTask(inputValue);
    setInputValue('');
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
    <img src={Image} alt="Image Not Found" />
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Add task" required  /><br/>
      <button type="submit" class='btn'>Add</button>
    </form>
    </div>
  );
}

export default TaskForm;
