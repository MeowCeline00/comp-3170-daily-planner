import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import FilterButton from "./components/FilterButton";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Task 1", completed: false },
    { text: "Task 2", completed: false },
    { text: "Task 3", completed: false },
  ]);
  const [filter, setFilter] = useState("all");

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

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <header>
        <div className="header-content">
          <img src="./rabbit3.png" alt="Rabbit" className="logo" />
          <h1>Rabbit Daily Planner</h1>
        </div>
      </header>

      <TaskForm addTask={addTask} />

      <div className="filter-buttons">
        <FilterButton
          filter="all"
          currentFilter={filter}
          onClick={handleFilterChange}
        >
          All
        </FilterButton>
        <FilterButton
          filter="completed"
          currentFilter={filter}
          onClick={handleFilterChange}
        >
          Completed
        </FilterButton>
        <FilterButton
          filter="pending"
          currentFilter={filter}
          onClick={handleFilterChange}
        >
          Pending
        </FilterButton>
      </div>

      <h2>You have {remainingTasks} tasks remaining</h2>

      <div className="task-list">
        {filteredTasks.map((task, index) => (
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
