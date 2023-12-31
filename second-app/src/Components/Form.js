import React, { useState } from 'react'


const Form = (props) => {
    
  let [input , setInput] =useState('');
   function inputChangeHandler(e){
    // console.log(e.target.value);
    setInput(e.target.value);
   }

   function formSubmitHandler(e){
    e.preventDefault(); // preventing from getting submitted
    const newTodo = {
      id: props.todos.length ,
      todo: input 
    }
    props.addTodo(newTodo);
    console.log(input);
    setInput('');
   }
  return (
    <div>
        <form onSubmit={formSubmitHandler} action="">
            <input onChange={inputChangeHandler} type="text" placeholder='Enter your task' value={input} />
        </form>
    </div>
  )
}

export default Form
// todoapp jiske andar sari todolist hai usme form component ko bhejenge

// react is a single page application tog react m page refresh nhi hona chahiye