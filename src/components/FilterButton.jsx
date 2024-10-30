import React from "react";

const FilterButton = ({ filter, currentFilter, onClick, children }) => {
  const isActive = filter === currentFilter;

  return (
    <button
      onClick={() => onClick(filter)}
      className="filter-button"
      style={{
        backgroundColor: isActive ? "#646cff" : "white",
        color: isActive ? "white" : "black",
        marginTop: "20px",
        padding: "10px",
        borderRadius: "10px",
        margin: "3px",
        border: "1px solid #646cff",
        cursor: "pointer",
        transition: "background-color 0.2s, color 0.2s",
      }}
    >
      {children}
    </button>
  );
};

export default FilterButton;
