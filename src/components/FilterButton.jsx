import React from "react";

const FilterButton = ({ filter, currentFilter, onClick, children }) => {
  return (
    <button
      onClick={() => onClick(filter)}
      style={{
        backgroundColor: filter === currentFilter ? "#646cff" : "white",
        color: filter === currentFilter ? "white" : "black",
        marginTop: 20,
        padding: 15,
      }}
    >
      {children}
    </button>
  );
};

export default FilterButton;
