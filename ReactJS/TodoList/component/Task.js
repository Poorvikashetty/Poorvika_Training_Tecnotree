import React from 'react';

const Task = (props) => {
  const { task, index, completeTask, removeTask } = props;
  const taskStyle = {
    textDecoration: task.completed ? 'line-through' : ''
  };

  return (
    <div className="task" style={taskStyle}>
      {task.title}<br/>
      <button onClick={() => completeTask(index)} class='btn1'>Complete</button>
      <button onClick={() => removeTask(index)} class='btn1'>x</button><br/>
    </div>
  );
}

export default Task;
