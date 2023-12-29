import React from 'react'
import TodoList from './TodoList'

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
  return (
    <div>
    {/* TodoList component ko TodoApp component m send kr rhe hai toh TodoApp component se TodoList Component ko returnkrenge */}
    {/* TodoApp component ka data Todolist component m send krna hai toh props means attributes ka use krenge to ek todos array banayenge and usme dummyArray assign krenge ....dummyArray is a varname of array means part of js toh { } m likenge */}
    {/* TodoApp component pr hai and TodoList component pr jana hai toh uss component pr ctrl ko press krenge(ctrl ko end tak press krte hi rehna hai) toh uss component pr line aa jayegi then uss line pr click krenge and uss component pr pahunch jayenge  aa jayenge */}
        <TodoList todos={dummyArray}/>
    </div>
  )
}

export default TodoApp

