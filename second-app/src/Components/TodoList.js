import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  // todolist component m jo todos array send ki hai use traverse krenge using map method
  const  allTodos = props.todos.map((item,index)=>{
    // alltodos m sari todo list aa jayengi jo todo fun ne return ki hai uske baad todoList fun se alltodos ko return kr denge in ul
    return <Todo key={index} id={item.id} todo={item.todo} index={index}/>
    // todo fun ek list return kr rhs hai and har list item ko ek unique key dete hai to key m index assignkrenge
    // todo fun call hoga and usme y attributes bhej rhe hai uske baad todo fun ek single todo list return krega...aise hi y har todo ke liye Todo fun call hoga and todo list return krega sabhi todolist allTodos m aa jayengi then TodoList fun se allTodos ko return kr denge means sabhi todolist ko return kr denge
  })
  // Todo fun call hoga(means todo component and usme 3 attributes bhej rhe hai toh todo fun m () ke andar props likenge and todo fun ke andar  props.att_name se data ko access krenge(means attribute ki value ko access krenge) )
  return (
    // jab sare todos mil jayenge from todos array to alltodos ko fun se return kr denge
    <div>
      <ul>
        {allTodos}
        {/* todolist fun se ek unordered list return kr rhe hai means sare todos returnkr rhe hai  */}
      </ul>
    </div>
  )
}

export default TodoList

// Todolist fun call hoga and usme 1 attribute todos array send kr he hai toh todolist fun m () ke andar props likenge and fun ke andat todos array ko access krme ke liye we will write props.todos