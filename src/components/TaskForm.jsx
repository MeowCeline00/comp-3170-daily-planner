import React, { useState } from "react";
import { motion } from "framer-motion";

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
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
      <motion.button
        className="btn-primary"
        type="submit"
        whileTap={{ scale: 0.85 }}
      >
        Save
      </motion.button>
    </form>
  );
};

export default TaskForm;
