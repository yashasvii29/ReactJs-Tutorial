import React, { useState } from 'react'
import TodoList from './TodoList'
import Form from './Form'

const TodoApp = () => {

    let dummyArray = [
        {
            id:0,
            todo:"Do code"
        },
        {
            id:1,
            todo:"create pull request"
        },
        {
            id:2,
            todo:"Push your code"
        },
        {
            id:3,
            todo:"Commit your code"
        }

    ]

    let [todos, setTodos] = useState(dummyArray);

    const addTodo=(todo)=>{
        setTodos([...todos,todo])
    }
  return (
    <div>
    {/* TodoList component ko TodoApp component m send kr rhe hai toh TodoApp component se TodoList Component ko returnkrenge */}
    {/* TodoApp component ka data Todolist component m send krna hai toh props means attributes ka use krenge to ek todos array banayenge and usme dummyArray assign krenge ....dummyArray is a varname of array means part of js toh { } m likenge */}
    {/* TodoApp component pr hai and TodoList component pr jana hai toh uss component pr ctrl ko press krenge(ctrl ko end tak press krte hi rehna hai) toh uss component pr line aa jayegi then uss line pr click krenge and uss component pr pahunch jayenge  aa jayenge */}
        <Form addTodo={addTodo} todos={todos}/>
        {/* <TodoList todos={dummyArray}/> */}
        <TodoList todos={todos}/>
        {/* Todoapp fun se ek ul return kr rhe hai jo Todolist fun ne return ki hai */}
    </div>
  )
}
// form component ko todoapp m bhej rhe hai toh todoapp component form ko return krega means form fun ko call krega

export default TodoApp

// task 1 => to add a new todo in a todolist so we will create a form to add a new todo in a todolist