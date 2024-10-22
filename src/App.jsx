import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Task 1", completed: false },
    { text: "Task 2", completed: false },
    { text: "Task 3", completed: false },
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app">
      <header>
        <h1>Daily Planner</h1>
      </header>

      <TaskForm addTask={addTask} />

      <h2>You have {remainingTasks} tasks remaining</h2>

      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            toggleComplete={() => toggleComplete(index)}
            removeTask={() => removeTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
