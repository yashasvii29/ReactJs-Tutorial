import React from 'react'
import { BsTrashFill } from "react-icons/bs";

const Todo = ({deleteTodo,checkTodo,todoItem}) => {
  function deleteTodoHandler(id){
    deleteTodo(id);
  }

  function inputChangeHandler(id){
    checkTodo(id);
  }
  return (
    <div>
      <li>
      <input type="checkbox" onChange={()=>{inputChangeHandler(todoItem.id)}} defaultChecked={todoItem.checked}/>
        <span> Id: {todoItem.id} -- Task: {todoItem.todo} </span>
        <span onClick={()=>deleteTodoHandler(todoItem.id)}><BsTrashFill/></span>
      </li>
    </div>
  )
}
// todo fun se ek todo list return kr rhe hai in alltodos var
export default Todo

// event pr direct function likh sakte hai