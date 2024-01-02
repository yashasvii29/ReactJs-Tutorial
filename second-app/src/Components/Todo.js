import React from 'react'
import { BsTrashFill } from "react-icons/bs";

const Todo = ({deleteTodo,checkTodo,todoItem}) => { // fun m () ke andar direct attributes ko destructure kr sakte hai in object...isse again and again props likhne ki need nhi hogi
  function deleteTodoHandler(id){ // jab delete icon pr click krenge toh click event chalega and y fun call hoga and iss fun m uss todoitem ki id bhej rhe h jise delete krna h from todolist....uske baad deleteTodo fun call hoga jo TodoApp component m hai and iss fun m uss todoitem ki id bhej rhe h jise delete krna h
    deleteTodo(id); // or props.deleteTodo(id)
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
// react icons ko apne project m use krne ke liye pehle install krenge then uss icon ko import krenge and then use krenge
// todo fun se ek todo list return kr rhe hai in alltodos var
export default Todo

// event pr direct function likh sakte hai