import React, { useState , useEffect} from 'react'
import TodoList from './TodoList'
import Form from './Form'
// import {v4 as uuid} from 'uuid';

const TodoApp = () => {
    // ab hum direct dummy array m data assign nhi krenge...hum localStorage se todos array ko get krenge then dummyArray m assign kr denge(agar todos array localStorage m available nhi hai toh empty array ko assign kr denge in dummyArray)
    let dummyArray = JSON.parse(window.localStorage.getItem('todos') || "[]")
    // jab hum object ke sath kaam krenge we will write json.parse()
    // localStorage ke sath kaam krne ke liye we will write window.localStorage

    // let dummyArray = [
    //     {
    //         // unique id dene ke liye uuid method ka use krenge so sabse pehle uuid module ko install krenge...npm i uuid then import the uuid module in the file
    //         id:uuid(),
    //         todo:"Do code",
    //         checked:false
    //     },
    //     {
    //         id:uuid(),
    //         todo:"create pull request",
    //         checked:false
    //     },
    //     {
    //         id:uuid(),
    //         todo:"Push your code",
    //         checked:false
    //     },
    //     {
    //         id:uuid(),
    //         todo:"Commit your code",
    //         checked:false
    //     }

    // ]
     // newTodo ko todos array m add krna hai means todos array m push krna hai toh uske liye  useState hook ka use krenge todos array m newtodo ko add krne ke liye means array m change krne ke liye....
    let [todos, setTodos] = useState(dummyArray);
 // task 1 => to add a new todo in a todolist so we will create a form to add a new todo in a todolist
    const addTodo=(todo)=>{ // addTodo fun create kiya hai and usme callback fun assign kiya hai
        // todos array m newTodo ko add krne ke liye we will use spread operator means (3 dots and uss array ka name jisme add krna hai , uska name jise add krna hai)
        // todos array m newTodo ko add krna hai means todos variable ki value ko change krna hai toh setTodos fun ka use krenge to change the value of a var and setTodos fun m spread operator pass krenge
        // console.log("addTodofun called");
        // y fun tab execute hoga jab form component m addTodo fun call hoga and todo m newTodo object ko bhejenge as a argument
        setTodos([...todos,todo])
    }
    console.log("inside this app component ");
    useEffect(()=>{
        // console.log("inside useEffect hook");
        // localstorage m todos array ko set kr rhe hai
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    // form ke andar addTodo fun ko bhejna hai toh props means attributes ka use krenge ... key(attribute) and value dono ka name same rakhenge
    // task 2=> to delete a todo from a todolist  (using filter method)
    // const deleteTodo = (id)=>{
    //     const newTodo =  todos.filter((todo)=>todo.id !== id);
    //     setTodos(newTodo);
    // }
    // both are correct delete krne ke liye kisi bhi logic ka use kr sakte hai simple ya prevstate ka
    const deleteTodo = (id)=>{ // isme uss todo ki id aayegi jise delete krna h from todo component
        // const newTodo =  todos.filter((todo)=>todo.id !== id);
        setTodos((prevState)=>{ // prevstate m todos array hogi
            return prevState.filter((todo)=>todo.id !== id);
        });
        // prevState means jo pehle tha ...jab hum  prevState ka use krte hai toh new var initialise krne ki need nhi hoti
        // deleteTodo fun ko todo component m bhejna h toh pehle todolist component m bhejenge with the help of props means attributes then todolist se todo component m
    }
    // task3 => to check or uncheck a todo in a todo list
    // checkTodo and deleteTodo dono ka process same h
    const checkTodo = (id)=>{

        setTodos((prevState)=>{
            return prevState.map((item)=> item.id === id ? {...item, checked:!item.checked} : item)
            // toggling ho rhi hai (means toggle kr rhe h checked ko unchecked and unchecked ko checked kr rhe h)....false ko true and true ko false kr rhe h
            // checkTodo fun ko todo component m bhejna h toh pehle todolist component m bhejenge with the help of props means attributes then todolist se todo component m
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


// task 2=> to delete a todo from a todolist  (using filter method)
// filter method returns a new array (array m vahi elements hote hai jo true hai) 


// through play cdn link (but iss link ka use only development means learning purpose ke liye kr sakte hai not for the production)
// react app m tailwindcss ko use krna hai toh sabse pehle public folder ke andar index.html file m play cdn link ko copy krenge after the meta tag....then uss current app (means folder kr andar) tailwind.config.js file create krenge and copy the content from the documentation


// production m tailwindcss ko use krna hai toh we will install it in our raect app