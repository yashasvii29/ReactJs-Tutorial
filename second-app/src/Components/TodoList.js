import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,deleteTodo,checkTodo}) => {
  // fun m () ke andar direct attributes ko bhi destructure kr sakte h  in object {}..isse again and again props likhne ki need nhi h
  // todolist component m jo todos array send ki hai use traverse krenge using map method
  const  allTodos =todos.map((item,index)=>{
    // alltodos m sari todo list aa jayengi jo todo fun ne return ki hai uske baad todoList fun se alltodos ko return kr denge in ul
    return <Todo key={index} id={item.id} todoItem={item} index={index} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    // todo fun ek list return kr rhs hai and har list item ko ek unique key dete hai to key m index assignkrenge
    // todo fun call hoga and usme y attributes bhej rhe hai uske baad todo fun ek single todo list return krega...aise hi y har todo ke liye Todo fun call hoga and todo list return krega sabhi todolist allTodos m aa jayengi then TodoList fun se allTodos ko return kr denge means sabhi todolist ko return kr denge
  })
  // Todo fun call hoga(means todo component and usme 3 attributes bhej rhe hai toh todo fun m () ke andar props likenge and todo fun ke andar  props.att_name se data ko access krenge(means attribute ki value ko access krenge) )
  return (
    // jab sare todos mil jayenge from todos array to alltodos ko fun se return kr denge
    <div className='flex'>
      <ul className='list-none uppercase justify-center w-1/2'>
        {allTodos}
        {/* todolist fun se ek unordered list return kr rhe hai means sare todos returnkr rhe hai  */}
      </ul>
    </div>
  )
}

export default TodoList

// Todolist fun call hoga and usme 1 attribute todos array send kr he hai toh todolist fun m () ke andar props likenge and fun ke andat todos array ko access krme ke liye we will write props.todos

// learn local storage and editing from itself(from youtube)
//  1. local storage 
// local storage is a key value pair means hum cheezon ko locally store kra sakte hai(means browser side pr store kra sakte hai)
// local storage has some methods => getItem() , setItem() , clear()

// 2. editing

//  states and props both are immutable .. we cannot change them directly but with the help of hooks we can chnage them