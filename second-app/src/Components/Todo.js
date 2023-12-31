import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <li>
        <p>Index: {props.index} --&gt; Id: {props.id} -- Task: {props.todo} </p>
      </li>
    </div>
  )
}
// todo fun se ek todo list return kr rhe hai in alltodos var
export default Todo