import React from "react";
import Todolist from "./Todolist";
import "./todo.css";
const Todo = () => {
  const handleInput = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="todo">
        <div className="input-container">
          <form onSubmit={handleInput}>
            <input type="text" name="list" required />
            <button type="submit">Add</button>
          </form>
        </div>
        <Todolist />
      </div>
    </div>
  );
};
export default Todo;
