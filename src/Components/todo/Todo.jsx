import React, { useState } from "react";
import Todolist from "./Todolist";
import "./todo.css";

const Todo = () => {
  const [listInput, setlistInput] = useState('');
  const [addTodo, SetaddTodo] = useState([]);
  const handleInput = (e) => {
    setlistInput(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault(); 
    SetaddTodo([...addTodo,{list:listInput,done:false}]);
  setlistInput('')
  };
  const handleDelete=(index)=>{
    const temp=[...addTodo]
    temp.splice(index,1)
    SetaddTodo(temp)
  }
  const handleDone=(index)=>{
    const temp=[...addTodo]
    temp[index].done=true
    SetaddTodo(temp)
    console.log(addTodo);
  }
  const handleUndo=(index)=>{
    const temp=[...addTodo]
    temp[index].done=false
    SetaddTodo(temp)
  }
  return (
    <div className="container">
      <div className="todo">
        <div className="title">TODO</div> 
        <div className="input-container">
        <form onSubmit={handleAdd} action="">
            <input onChange={handleInput} type="text" required value={listInput} maxLength={24} />
            <button type="submit">Add</button>
        </form>
        </div>
        <div className="todolist">
          {addTodo.map((ele, index) =><Todolist data={ele} index={index} key={index} makeItdelete={handleDelete} handleDone={handleDone} handleUndo={handleUndo} />)}
        </div>
      </div>
    </div>
  );
};
export default Todo;
