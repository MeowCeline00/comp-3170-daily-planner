import React from "react";
import { motion } from "framer-motion";

const Task = ({ task, toggleComplete, removeTask }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </h3>
      <motion.button 
        whileTap={{ scale: 0.85 }} 
        onClick={removeTask} 
        className="remove-button">
        Remove
      </motion.button>
    </div>
  );
};

export default Task;
