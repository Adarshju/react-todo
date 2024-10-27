import React from "react";
import "./todolist.css";
const Todolist = ({ data, index, makeItdelete, handleDone,handleUndo }) => {
  return (
    <div className="list">
      <div>
        <p  className={`${data.done? "donelabel": ''}  list-label`}>{data.list}</p>
      </div>
      <div>
        <button
          onClick={() => {data.done? handleUndo(index) : makeItdelete(index)}}
          style={data.done? {backgroundColor: "#1962ff"}:{backgroundColor: "#ff0404"}}
        >
          {data.done ? "Undo" : "Delete"}
        </button>
      </div>
      <div>
        {!data.done && (
          <button
            onClick={() => {
              handleDone(index);
            }}
            style={{ backgroundColor: "#0bda0b" }}
          >
            Done
          </button>
        )}
      </div>
    </div>
  );
};
export default Todolist;
