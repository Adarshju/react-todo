import React from "react";
import "./todolist.css";
const Todolist = () => {
  return (
    <div className="todolist">
      <div className="list">
        <p>hello how are you</p>
        <button>Delete</button>
        <button>Done</button>
      </div>
      <div className="list">
        <p>hello how are you</p>
        <button style={{ backgroundColor: '#ff0404' }}>Delete</button>
        <button style={{ backgroundColor: '#0bda0b' }}>Done</button>
      </div>
    </div>
  );
};

export default Todolist;


