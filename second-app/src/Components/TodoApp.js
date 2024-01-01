import React, { useState } from 'react'
import TodoList from './TodoList'
import Form from './Form'
import {v4 as uuid} from 'uuid';

const TodoApp = () => {

    let dummyArray = [
        {
            // unique id dene ke liye uuid method ka use krenge so sabse pehle uuid module ko install krenge...npm i uuid then import the uuid module in the file
            id:uuid(),
            todo:"Do code",
            checked:false
        },
        {
            id:uuid(),
            todo:"create pull request",
            checked:false
        },
        {
            id:uuid(),
            todo:"Push your code",
            checked:false
        },
        {
            id:uuid(),
            todo:"Commit your code",
            checked:false
        }

    ]

    let [todos, setTodos] = useState(dummyArray);
 // task 1 => to add a new todo in a todolist so we will create a form to add a new todo in a todolist
    const addTodo=(todo)=>{
        setTodos([...todos,todo])
    }
    // task 2=> to delete a todo from a todolist  (using filter method)
    // const deleteTodo = (id)=>{
    //     const newTodo =  todos.filter((todo)=>todo.id !== id);
    //     setTodos(newTodo);
    // }
    // both are correct delete krne ke liye kisi bhi logic ka use kr sakte hai simple ya prevstate ka
    const deleteTodo = (id)=>{
        // const newTodo =  todos.filter((todo)=>todo.id !== id);
        setTodos((prevState)=>{
            return prevState.filter((todo)=>todo.id !== id);
        });
        // prevState means jo pehle tha ...jab hum  prevState ka use krte hai toh new var initialise krne ki need nhi hoti
    }
    // task3 => to check or uncheck a todo in a todo list
    const checkTodo = (id)=>{
        setTodos((prevState)=>{
            return prevState.map((item)=> item.id === id ? {...item,checked: !item.checked} : item)
            // toggling ho rhi hai (means toggle kr rhe h checked ko unchecked and unchecked ko checked kr rhe h)
        })
    }
  return (
    <div>
    {/* TodoList component ko TodoApp component m send kr rhe hai toh TodoApp component se TodoList Component ko returnkrenge */}
    {/* TodoApp component ka data Todolist component m send krna hai toh props means attributes ka use krenge to ek todos array banayenge and usme dummyArray assign krenge ....dummyArray is a varname of array means part of js toh { } m likenge */}
    {/* TodoApp component pr hai and TodoList component pr jana hai toh uss component pr ctrl ko press krenge(ctrl ko end tak press krte hi rehna hai) toh uss component pr line aa jayegi then uss line pr click krenge and uss component pr pahunch jayenge  aa jayenge */}
        <h1 className='text-center' >Todo List for Yashasvi Agrawal</h1>
        <Form addTodo={addTodo} todos={todos}/>
        {/* <TodoList todos={dummyArray}/> */}
        <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
        {/* Todoapp fun se ek ul return kr rhe hai jo Todolist fun ne return ki hai */}
    </div>
  )
}
// form component ko todoapp m bhej rhe hai toh todoapp component form ko return krega means form fun ko call krega

export default TodoApp

// // task 1 => to add a new todo in a todolist so we will create a form to add a new todo in a todolist
// react icons ko apne project m use krne ke liye pehle install krenge then uss icon ko import krenge and then use krenge

// task 2=> to delete a todo from a todolist  (using filter method)
// filter method returns a new array (array m vahi elements hote hai jo true hai) 


// through play cdn link (but iss link ka use only development means learning purpose ke liye kr sakte hai not for the production)
// react app m tailwindcss ko use krna hai toh sabse pehle public folder ke andar index.html file m play cdn link ko copy krenge after the meta tag....then uss current app (means folder kr andar) tailwind.config.js file create krenge and copy the content from the documentation


// production m tailwindcss ko use krna hai toh we will install it in our raect app