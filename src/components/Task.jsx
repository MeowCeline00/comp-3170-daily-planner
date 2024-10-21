import React from 'react';

const Task = ({ task, toggleComplete, removeTask }) => {
  return (
    <div className="task">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={toggleComplete} 
      />
      <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </h3>
      <button onClick={removeTask}>Remove</button>
    </div>
  );
};

export default Task;
