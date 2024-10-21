import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);  
      setTaskText('');    
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="new task ..." 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)}  
      />
      <button className="btn-primary" type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
